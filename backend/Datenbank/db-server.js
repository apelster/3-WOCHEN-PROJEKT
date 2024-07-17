const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

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
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as id ' + db.threadId);
});

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());

// Route für das Speichern von Profilen
app.post('/saveProfile', (req, res) => {
  const { name, city, phone, birthday, description } = req.body;

  console.log('Received profile data:', req.body);

  const query = 'INSERT INTO profiles (name, city, phone, birthday, description) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, city, phone, birthday, description], (err, result) => {
    if (err) {
      console.error('Error saving profile: ' + err.stack);
      res.status(500).send('Error saving profile');
      return;
    }
    console.log('Profile saved successfully:', result);
    res.send('Profile saved successfully');
  });
});

// Server starten
app.listen(port, () => {
  console.log(`Server running on http://3.124.9.130/:${port}`);
});
