const mysql = require('mysql2/promise');

async function initializeDatabase() {
    const connection = await mysql.createConnection({
        host: 'freundebuch.cfseo6ieksme.eu-central-1.rds.amazonaws.com',
        user: 'root',
        password: 'Eisbombe11#',
    });

    // SQL Skript zur Initialisierung der Datenbank
    const createDatabaseSQL = `
        CREATE DATABASE IF NOT EXISTS freundebuch;
    `;

    // Tabelle Profil erstellen
    const createProfilTableSQL = `
        CREATE TABLE IF NOT EXISTS Profil (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            geburtstag DATE
        );
    `;

    // Tabelle Fragen_1 erstellen
    const createFragen1TableSQL = `
        CREATE TABLE IF NOT EXISTS Fragen_1 (
            id INT AUTO_INCREMENT PRIMARY KEY,
            profil_id INT,
            frage VARCHAR(255) NOT NULL,
            antwort VARCHAR(255),
            FOREIGN KEY (profil_id) REFERENCES Profil(id)
        );
    `;

    // Tabelle Fragen_2 erstellen
    const createFragen2TableSQL = `
        CREATE TABLE IF NOT EXISTS Fragen_2 (
            id INT AUTO_INCREMENT PRIMARY KEY,
            profil_id INT,
            frage VARCHAR(255) NOT NULL,
            antwort VARCHAR(255),
            FOREIGN KEY (profil_id) REFERENCES Profil(id)
        );
    `;

    // Tabelle Fragen_3 erstellen
    const createFragen3TableSQL = `
        CREATE TABLE IF NOT EXISTS Fragen_3 (
            id INT AUTO_INCREMENT PRIMARY KEY,
            profil_id INT,
            frage VARCHAR(255) NOT NULL,
            antwort VARCHAR(255),
            FOREIGN KEY (profil_id) REFERENCES Profil(id)
        );
    `;

    // Tabelle Fragen_4 erstellen
    const createFragen4TableSQL = `
        CREATE TABLE IF NOT EXISTS Fragen_4 (
            id INT AUTO_INCREMENT PRIMARY KEY,
            profil_id INT,
            frage VARCHAR(255) NOT NULL,
            antwort VARCHAR(255),
            FOREIGN KEY (profil_id) REFERENCES Profil(id)
        );
    `;

    // Tabelle Bilder erstellen
    const createBilderTableSQL = `
        CREATE TABLE IF NOT EXISTS Bilder (
            id INT AUTO_INCREMENT PRIMARY KEY,
            profil_id INT,
            bild_name VARCHAR(255) NOT NULL,
            bild BLOB,
            FOREIGN KEY (profil_id) REFERENCES Profil(id)
        );
    `;

    try {
        await connection.query(createDatabaseSQL);

        // Verbindung zur freundebuch-Datenbank herstellen
        const dbConnection = await mysql.createConnection({
            host: 'freundebuch.cfseo6ieksme.eu-central-1.rds.amazonaws.com',
            user: 'root',
            password: 'Eisbombe11#',
            database: 'freundebuch'
        });

        await dbConnection.query(createProfilTableSQL);
        await dbConnection.query(createFragen1TableSQL);
        await dbConnection.query(createFragen2TableSQL);
        await dbConnection.query(createFragen3TableSQL);
        await dbConnection.query(createFragen4TableSQL);
        await dbConnection.query(createBilderTableSQL);

        console.log('Database and tables created successfully');
        await dbConnection.end();
    } catch (err) {
        console.error('Error initializing database:', err);
    } finally {
        await connection.end();
    }
}

initializeDatabase().catch(err => {
    console.error('Error initializing database:', err);
});
