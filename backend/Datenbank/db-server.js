const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
const port = 3001;

// MySQL-Verbindung
const db = mysql.createConnection({
  host: 'freundebuchnew.cfseo6ieksme.eu-central-1.rds.amazonaws.com',
  user: 'root',
  password: 'Eisbombe11#',
  database: 'freundebuch',
  port: 3306
});

db.connect(err => {
  if (err) {
    console.error('Fehler beim Verbinden mit der Datenbank: ' + err.stack);
    return;
  }
  console.log('Mit der Datenbank verbunden als ID ' + db.threadId);
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route zum Speichern des Benutzerprofils
app.post('/saveProfile', (req, res) => {
  const { name, city, phone, birthday, description } = req.body;
  const profileToken = crypto.randomBytes(16).toString('hex');

  const query = 'INSERT INTO profiles (name, city, phone, birthday, description, profile_token) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [name, city, phone, birthday, description, profileToken], (err, result) => {
    if (err) {
      console.error('Fehler beim Speichern des Profils: ' + err.stack);
      res.status(500).send('Fehler beim Speichern des Profils');
      return;
    }
    res.send({ message: 'Profil erfolgreich gespeichert', profileToken });
  });
});

// Route zum Speichern des Freundesprofils
app.post('/saveFriendProfile', (req, res) => {
  const { name, city, phone, birthday, description, userProfileToken } = req.body;

  const getUserProfileQuery = 'SELECT id FROM profiles WHERE profile_token = ?';
  db.query(getUserProfileQuery, [userProfileToken], (err, results) => {
    if (err || results.length === 0) {
      console.error('Fehler beim Finden des Benutzerprofils: ' + err.stack);
      res.status(500).send('Fehler beim Finden des Benutzerprofils');
      return;
    }
    
    const userProfileId = results[0].id;
    const insertFriendProfileQuery = 'INSERT INTO freundeprofiles (user_profile_id, name, city, phone, birthday, description) VALUES (?, ?, ?, ?, ?, ?)';
    
    db.query(insertFriendProfileQuery, [userProfileId, name, city, phone, birthday, description], (err, result) => {
      if (err) {
        console.error('Fehler beim Speichern des Freundesprofils: ' + err.stack);
        res.status(500).send('Fehler beim Speichern des Freundesprofils');
        return;
      }
      res.send({ message: 'Freundesprofil erfolgreich gespeichert', friendProfileId: result.insertId });
    });
  });
});

// Route zum Speichern der Antworten
app.post('/saveAnswers', (req, res) => {
  const { question1, question2, question3, question4, question5, friendProfileId } = req.body;

  const query = 'INSERT INTO answers (freundeprofile_id, question1, question2, question3, question4, question5) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [friendProfileId, question1, question2, question3, question4, question5], (err, result) => {
    if (err) {
      console.error('Fehler beim Speichern der Antworten: ' + err.stack);
      res.status(500).send('Fehler beim Speichern der Antworten');
      return;
    }
    res.send('Antworten erfolgreich gespeichert');
  });
});

// Route zum Abrufen des Benutzerprofils
app.get('/getProfile/:profileToken', (req, res) => {
  const profileToken = req.params.profileToken;

  const query = 'SELECT * FROM profiles WHERE profile_token = ?';
  db.query(query, [profileToken], (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen des Profils: ' + err.stack);
      res.status(500).send('Fehler beim Abrufen des Profils');
      return;
    }
    if (results.length === 0) {
      res.status(404).send('Profil nicht gefunden');
      return;
    }
    res.send(results[0]);
  });
});

// Route zum Abrufen des Benutzerprofils mit Freundesprofilen
app.get('/getProfileWithFriends/:profileToken', (req, res) => {
  const profileToken = req.params.profileToken;

  const getUserProfileQuery = 'SELECT * FROM profiles WHERE profile_token = ?';
  db.query(getUserProfileQuery, [profileToken], (err, profileResults) => {
    if (err) {
      console.error('Fehler beim Abrufen des Profils: ' + err.stack);
      res.status(500).send('Fehler beim Abrufen des Profils');
      return;
    }
    if (profileResults.length === 0) {
      res.status(404).send('Profil nicht gefunden');
      return;
    }

    const userProfileId = profileResults[0].id;
    const getFriendProfilesQuery = 'SELECT * FROM freundeprofiles WHERE user_profile_id = ?';
    db.query(getFriendProfilesQuery, [userProfileId], (err, friendResults) => {
      if (err) {
        console.error('Fehler beim Abrufen der Freundesprofile: ' + err.stack);
        res.status(500).send('Fehler beim Abrufen der Freundesprofile');
        return;
      }
      res.send({ userProfile: profileResults[0], friendProfiles: friendResults });
    });
  });
});

// Route zum Abrufen aller Antworten für ein bestimmtes friendProfileId
app.get('/getAllAnswers/:friendProfileId', (req, res) => {
  const friendProfileId = req.params.friendProfileId;

  const query = 'SELECT * FROM answers WHERE freundeprofile_id = ?';
  db.query(query, [friendProfileId], (err, results) => {
    if (err) {
      console.error('Fehler beim Abrufen der Antworten: ' + err.stack);
      res.status(500).send('Fehler beim Abrufen der Antworten');
      return;
    }
    res.send(results);
  });
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft unter http://3.70.29.185:${port}`);
});
