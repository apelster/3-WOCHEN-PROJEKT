const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
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

// Multer Konfiguration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage });

// Route für das Speichern von Profilen
app.post('/saveProfile', upload.single('file'), (req, res) => {
  const { name, city, phone, birthday, description } = req.body;
  const file = req.file;

  console.log('Received profile data:', req.body);
  console.log('Received file:', file);

  const query = 'INSERT INTO profiles (name, city, phone, birthday, description, file_path) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [name, city, phone, birthday, description, file ? file.path : null];

  db.query(query, values, (err, result) => {
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
