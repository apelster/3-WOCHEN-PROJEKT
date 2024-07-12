const mysql = require('mysql2/promise');

async function initializeDatabase() {
    const connection = await mysql.createConnection({
        host: 'your-rds-endpoint', // Ersetze 'your-rds-endpoint' durch deinen RDS-Endpunkt
        user: 'your-rds-username', // Ersetze 'your-rds-username' durch deinen RDS-Benutzernamen
        password: 'your-rds-password', // Ersetze 'your-rds-password' durch dein RDS-Passwort
    });

    // SQL Skript zur Initialisierung der Datenbank und Tabellen
    const createDatabaseSQL = `
        CREATE DATABASE IF NOT EXISTS freundebuch;
    `;

    const createTablesSQL = `
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

    await connection.query(createDatabaseSQL);

    // Verbindung zur freundebuch-Datenbank herstellen
    const dbConnection = await mysql.createConnection({
        host: 'freundebuch.cfseo6ieksme.eu-central-1.rds.amazonaws.com', // Ersetze 'your-rds-endpoint' durch deinen RDS-Endpunkt
        user: 'root', // Ersetze 'your-rds-username' durch deinen RDS-Benutzernamen
        password: 'Eisbombe11#', // Ersetze 'your-rds-password' durch dein RDS-Passwort
        database: 'freundebuch'
    });

    await dbConnection.query(createTablesSQL);

    console.log('Database and tables created successfully');
    await dbConnection.end();
    await connection.end();
}

initializeDatabase().catch(err => {
    console.error('Error initializing database:', err);
});
