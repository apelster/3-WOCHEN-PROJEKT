const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db-server-init'); // Importiere die Datenbankverbindung

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Endpoint to save profile data
app.post('/saveProfile', (req, res) => {
  const { name, city, phone, birthday, description } = req.body;

  const query = 'INSERT INTO profiles (name, city, phone, birthday, description) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, city, phone, birthday, description], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving profile data');
    } else {
      res.status(200).send('Profile data saved successfully');
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
