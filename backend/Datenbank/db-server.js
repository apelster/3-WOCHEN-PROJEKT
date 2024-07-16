const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

// MySQL-Verbindung einrichten
const db = mysql.createConnection({
  host: 'freundebuch.cfseo6ieksme.eu-central-1.rds.amazonaws.com',
  user: 'root',
  password: 'Eisbombe11#',
  database: 'freundebuch'
});

db.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

// Middleware
app.use(bodyParser.json());

// Route für das Speichern von Profilen
app.post('/saveProfile', (req, res) => {
  const { name, city, phone, birthday, description } = req.body;

  const query = 'INSERT INTO profiles (name, city, phone, birthday, description) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, city, phone, birthday, description], (err, result) => {
    if (err) {
      console.error('Error saving profile: ' + err.stack);
      res.status(500).send('Error saving profile');
      return;
    }
    res.send('Profile saved successfully');
  });
});

// Server starten
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
