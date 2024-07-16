const mysql = require('mysql');

// MySQL connection setup
const db = mysql.createConnection({
  host: 'freundebuch.cfseo6ieksme.eu-central-1.rds.amazonaws.com',
  user: 'root',
  password: 'PatDocTest'
});

db.connect(err => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + db.threadId);

  // Create database if it doesn't exist
  db.query('CREATE DATABASE IF NOT EXISTS freundebuch', (err, result) => {
    if (err) {
      console.error('Error creating database: ' + err.stack);
      return;
    }
    console.log('Database created or exists already.');

    // Switch to the new database
    db.changeUser({ database: 'freundebuch' }, err => {
      if (err) {
        console.error('Error changing database: ' + err.stack);
        return;
      }

      // Run the SQL script to initialize the database
      const fs = require('fs');
      const initSql = fs.readFileSync('./init-db.sql', 'utf8');

      db.query(initSql, (err, result) => {
        if (err) {
          console.error('Error executing init script: ' + err.stack);
          return;
        }
        console.log('Database initialized.');
      });
    });
  });
});

module.exports = db;
