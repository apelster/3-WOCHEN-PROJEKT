const mysql = require('mysql2/promise');
const { initDatabase } = require('./db-server-init'); // Importiere die initDatabase Funktion

async function connectToDatabase() {
    // Initialisiere die Datenbank
    await initDatabase();

    const connection = await mysql.createConnection({
        host: 'freundebuch.cfseo6ieksme.eu-central-1.rds.amazonaws.com',
        user: 'root',
        password: 'Eisbombe11#',
        database: 'freundebuch'
    });

    console.log('Connected to the MySQL database.');

    // Test query
    const [rows] = await connection.execute('SELECT * FROM Profil');
    console.log(rows);

    await connection.end();
}

connectToDatabase().catch(err => {
    console.error('Error connecting to the database:', err);
});
