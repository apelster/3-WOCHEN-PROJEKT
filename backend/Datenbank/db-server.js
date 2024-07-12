const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3306;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'freundebuch.cfseo6ieksme.eu-central-1.rds.amazonaws.com',
  user: 'root',
  password: 'Eisbombe11#',
  database: 'freundebuch'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database.');
});

// Endpunkt zum Abrufen von zufälligen Fragen aus jedem der Fragen-Tabellen
app.get('/random-questions', (req, res) => {
  const query = `
    SELECT * FROM (
      SELECT frage FROM Fragen_1 ORDER BY RAND() LIMIT 6
    ) AS t1
    UNION ALL
    SELECT * FROM (
      SELECT frage FROM Fragen_2 ORDER BY RAND() LIMIT 6
    ) AS t2
    UNION ALL
    SELECT * FROM (
      SELECT frage FROM Fragen_3 ORDER BY RAND() LIMIT 6
    ) AS t3
    UNION ALL
    SELECT * FROM (
      SELECT frage FROM Fragen_4 ORDER BY RAND() LIMIT 6
    ) AS t4
    UNION ALL
    SELECT * FROM (
      SELECT frage FROM Fragen_5 ORDER BY RAND() LIMIT 6
    ) AS t5
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching random questions:', err);
      res.status(500).json({ error: 'Error fetching random questions' });
    } else {
      res.json(results);
    }
  });
});

// Endpunkt zum Speichern von Antworten
app.post('/antworten', (req, res) => {
  const { profil_id, antworten } = req.body;
  const queries = [];

  antworten.forEach((antwort, index) => {
    const tableIndex = Math.floor(index / 5) + 1;
    const query = `
      INSERT INTO Fragen_${tableIndex} (profil_id, frage, antwort)
      VALUES (?, ?, ?)
      ON DUPLICATE KEY UPDATE antwort = VALUES(antwort)
    `;
    queries.push(new Promise((resolve, reject) => {
      db.query(query, [profil_id, antwort.frage, antwort.antwort], (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    }));
  });

  Promise.all(queries)
    .then(results => {
      res.json({ message: 'Antworten erfolgreich gespeichert' });
    })
    .catch(err => {
      console.error('Error saving answers:', err);
      res.status(500).json({ error: 'Error saving answers' });
    });
});

// Endpunkt zum Abrufen der Antworten eines Profils
app.get('/antworten/:profil_id', (req, res) => {
  const { profil_id } = req.params;
  const query = `
    SELECT * FROM Fragen_1 WHERE profil_id = ?
    UNION
    SELECT * FROM Fragen_2 WHERE profil_id = ?
    UNION
    SELECT * FROM Fragen_3 WHERE profil_id = ?
    UNION
    SELECT * FROM Fragen_4 WHERE profil_id = ?
    UNION
    SELECT * FROM Fragen_5 WHERE profil_id = ?
  `;
  db.query(query, [profil_id, profil_id, profil_id, profil_id, profil_id], (err, results) => {
    if (err) {
      console.error('Error fetching answers:', err);
      res.status(500).json({ error: 'Error fetching answers' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
