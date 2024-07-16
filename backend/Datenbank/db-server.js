const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'your-rds-endpoint',
  user: 'your-username',
  password: 'your-password',
  database: 'your-database'
});

db.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);
});

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
