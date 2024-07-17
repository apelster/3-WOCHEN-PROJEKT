const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

// Function to read an SQL file
async function readSQLFile(filePath) {
    return fs.promises.readFile(filePath, 'utf8');
}

// Function to execute an SQL file
async function executeSQLFile(connection, filePath) {
    const sql = await readSQLFile(filePath);
    await connection.query(sql);
}

// Function to initialize the database and tables
async function initDatabase() {
    const connection = await mysql.createConnection({
        host: 'freundebuchnew.cfseo6ieksme.eu-central-1.rds.amazonaws.com',
        user: 'root',
        password: 'Eisbombe11#',
        multipleStatements: true // Allows multiple SQL statements in one query
    });

    try {
        await executeSQLFile(connection, path.join(__dirname, 'init-db.sql'));
        console.log('Database and tables successfully created.');
    } catch (error) {
        console.error('Error creating database and tables:', error);
    } finally {
        await connection.end();
    }
}

// Execute the initialization function
initDatabase();
