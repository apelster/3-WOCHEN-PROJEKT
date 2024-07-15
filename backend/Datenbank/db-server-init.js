const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function readSQLFile(filePath) {
    return fs.promises.readFile(filePath, 'utf8');
}

async function executeSQLFile(connection, filePath) {
    const sql = await readSQLFile(filePath);
    await connection.query(sql);
}

async function initDatabase() {
    const connection = await mysql.createConnection({
        host: 'freundebuch.cfseo6ieksme.eu-central-1.rds.amazonaws.com',
        user: 'root',
        password: 'Eisbombe11#',
        multipleStatements: true 
    });

    try {
        await executeSQLFile(connection, path.join(__dirname, 'freundebuch.sql'));
        console.log('Datenbank und Tabellen erfolgreich erstellt.');
    } catch (error) {
        console.error('Fehler beim Erstellen der Datenbank und Tabellen:', error);
    } finally {
        await connection.end();
    }
}

module.exports = { initDatabase };
