const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3005;

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

// Endpunkt zum Speichern von Antworten
app.post('/antworten', (req, res) => {
  const { profil_id, fragen } = req.body; // erwartetes Format: { profil_id: 1, fragen: { fragen_1: [{frage, antwort}, ...], fragen_2: [...], fragen_3: [...], fragen_4: [...] } }

  try {
    for (const [key, values] of Object.entries(fragen)) {
      values.forEach(({ frage, antwort }) => {
        const query = `INSERT INTO ${key} (profil_id, frage, antwort) VALUES (?, ?, ?)`;
        db.query(query, [profil_id, frage, antwort], (err, result) => {
          if (err) {
            console.error(`Error inserting into ${key}:`, err);
            res.status(500).json({ error: `Error inserting into ${key}` });
            return;
          }
        });
      });
    }
    res.status(200).json({ message: 'Antworten erfolgreich gespeichert' });
  } catch (err) {
    console.error('Error processing request:', err);
    res.status(500).json({ error: 'Error processing request' });
  }
});

// Endpunkt zum Abrufen von Profilen und deren Antworten
app.get('/profil/:id', (req, res) => {
  const { id } = req.params;

  const queries = {
    profil: 'SELECT * FROM Profil WHERE id = ?',
    fragen1: 'SELECT * FROM Fragen_1 WHERE profil_id = ?',
    fragen2: 'SELECT * FROM Fragen_2 WHERE profil_id = ?',
    fragen3: 'SELECT * FROM Fragen_3 WHERE profil_id = ?',
    fragen4: 'SELECT * FROM Fragen_4 WHERE profil_id = ?',
    bilder: 'SELECT * FROM Bilder WHERE profil_id = ?'
  };

  const results = {};

  const handleQuery = (key, query) => {
    return new Promise((resolve, reject) => {
      db.query(query, [id], (err, rows) => {
        if (err) {
          reject(err);
        } else {
          results[key] = rows;
          resolve();
        }
      });
    });
  };

  Promise.all(Object.entries(queries).map(([key, query]) => handleQuery(key, query)))
    .then(() => {
      res.json(results);
    })
    .catch(err => {
      console.error('Error fetching profile data:', err);
      res.status(500).json({ error: 'Error fetching profile data' });
    });
});

// Endpunkt zum Erstellen eines neuen Profils
app.post('/profil', (req, res) => {
  const { name, geburtstag } = req.body;
  const query = 'INSERT INTO Profil (name, geburtstag) VALUES (?, ?)';

  db.query(query, [name, geburtstag], (err, result) => {
    if (err) {
      console.error('Error inserting profile:', err);
      res.status(500).json({ error: 'Error inserting profile' });
    } else {
      res.status(200).json({ id: result.insertId, name, geburtstag });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
