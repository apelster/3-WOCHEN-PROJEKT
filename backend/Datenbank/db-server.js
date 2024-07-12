const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

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

// Endpunkt zum Abrufen der Fragen
app.get('/fragen', (req, res) => {
  const query = `
    SELECT frage FROM Fragen_1
    UNION
    SELECT frage FROM Fragen_2
    UNION
    SELECT frage FROM Fragen_3
    UNION
    SELECT frage FROM Fragen_4
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching questions:', err);
      res.status(500).json({ error: 'Error fetching questions' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
