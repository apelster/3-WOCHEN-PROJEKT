const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
const port = 3001;

// MySQL connection
const db = mysql.createConnection({
  host: 'freundebuchnew.cfseo6ieksme.eu-central-1.rds.amazonaws.com',
  user: 'root',
  password: 'Eisbombe11#',
  database: 'freundebuch',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as id ' + db.threadId);
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route to save user profile
app.post('/saveProfile', (req, res) => {
  const { name, city, phone, birthday, description } = req.body;
  const profileToken = crypto.randomBytes(16).toString('hex');

  const query = 'INSERT INTO profiles (name, city, phone, birthday, description, profile_token) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [name, city, phone, birthday, description, profileToken], (err, result) => {
    if (err) {
      console.error('Error saving profile: ' + err.stack);
      res.status(500).send('Error saving profile');
      return;
    }
    res.send({ message: 'Profile saved successfully', profileToken });
  });
});

// Route to save friend's profile
app.post('/saveFriendProfile', (req, res) => {
  const { name, city, phone, birthday, description, userProfileToken } = req.body;

  const getUserProfileQuery = 'SELECT id FROM profiles WHERE profile_token = ?';
  db.query(getUserProfileQuery, [userProfileToken], (err, results) => {
    if (err || results.length === 0) {
      console.error('Error finding user profile: ' + err.stack);
      res.status(500).send('Error finding user profile');
      return;
    }
    
    const userProfileId = results[0].id;
    const insertFriendProfileQuery = 'INSERT INTO freundeprofiles (user_profile_id, name, city, phone, birthday, description) VALUES (?, ?, ?, ?, ?, ?)';
    
    db.query(insertFriendProfileQuery, [userProfileId, name, city, phone, birthday, description], (err, result) => {
      if (err) {
        console.error('Error saving friend profile: ' + err.stack);
        res.status(500).send('Error saving friend profile');
        return;
      }
      res.send({ message: 'Friend profile saved successfully', friendProfileId: result.insertId });
    });
  });
});

// Route to save answers
app.post('/saveAnswers', (req, res) => {
  const { question1, question2, question3, question4, question5, friendProfileId } = req.body;

  const query = 'INSERT INTO answers (freundeprofile_id, question1, question2, question3, question4, question5) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [friendProfileId, question1, question2, question3, question4, question5], (err, result) => {
    if (err) {
      console.error('Error saving answers: ' + err.stack);
      res.status(500).send('Error saving answers');
      return;
    }
    res.send('Answers saved successfully');
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://3.70.29.185:${port}`);
});
