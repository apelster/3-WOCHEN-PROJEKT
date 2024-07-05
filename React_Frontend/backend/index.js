// backend/index.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'chatapp'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Beispiel-Routen für Registrierung und Authentifizierung
app.post('/register', (req, res) => {
  // Registrierung implementieren
});

app.post('/login', (req, res) => {
  // Authentifizierung implementieren
});

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
