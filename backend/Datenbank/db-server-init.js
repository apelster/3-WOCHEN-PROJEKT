const mysql = require('mysql2/promise');

async function initializeDatabase() {
    const connection = await mysql.createConnection({
        host: 'freundebuch.cfseo6ieksme.eu-central-1.rds.amazonaws.com', 
        user: 'root', 
        password: 'Eisbombe11#', 
    });

    // SQL Skript zur Initialisierung der Datenbank und Tabellen
    const initSQL = `
        CREATE DATABASE IF NOT EXISTS freundebuch;

        USE freundebuch;

        CREATE TABLE IF NOT EXISTS Profil (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            geburtstag DATE
        );

        CREATE TABLE IF NOT EXISTS Fragen_1 (
            id INT AUTO_INCREMENT PRIMARY KEY,
            profil_id INT,
            frage VARCHAR(255) NOT NULL,
            antwort VARCHAR(255),
            FOREIGN KEY (profil_id) REFERENCES Profil(id)
        );

        CREATE TABLE IF NOT EXISTS Fragen_2 (
            id INT AUTO_INCREMENT PRIMARY KEY,
            profil_id INT,
            frage VARCHAR(255) NOT NULL,
            antwort VARCHAR(255),
            FOREIGN KEY (profil_id) REFERENCES Profil(id)
        );

        CREATE TABLE IF NOT EXISTS Fragen_3 (
            id INT AUTO_INCREMENT PRIMARY KEY,
            profil_id INT,
            frage VARCHAR(255) NOT NULL,
            antwort VARCHAR(255),
            FOREIGN KEY (profil_id) REFERENCES Profil(id)
        );

        CREATE TABLE IF NOT EXISTS Fragen_4 (
            id INT AUTO_INCREMENT PRIMARY KEY,
            profil_id INT,
            frage VARCHAR(255) NOT NULL,
            antwort VARCHAR(255),
            FOREIGN KEY (profil_id) REFERENCES Profil(id)
        );

        CREATE TABLE IF NOT EXISTS Bilder (
            id INT AUTO_INCREMENT PRIMARY KEY,
            profil_id INT,
            bild_name VARCHAR(255) NOT NULL,
            bild BLOB,
            FOREIGN KEY (profil_id) REFERENCES Profil(id)
        );
    `;

    await connection.query(initSQL);
    console.log('Database and tables created successfully');
    await connection.end();
}

initializeDatabase().catch(err => {
    console.error('Error initializing database:', err);
});
