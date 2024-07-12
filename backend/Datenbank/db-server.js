const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3005;

const dbConfig = {
    host: 'freundebuch.cfseo6ieksme.eu-central-1.rds.amazonaws.com', // Ersetze 'your-rds-endpoint' durch deinen RDS-Endpunkt
    user: 'root', // Ersetze 'your-rds-username' durch deinen RDS-Benutzernamen
    password: 'Eisbombe11#', // Ersetze 'your-rds-password' durch dein RDS-Passwort
    database: 'freundebuch'
};

// Middleware zum Parsen von JSON-Daten
app.use(express.json());

// Endpunkt zum Abrufen aller Fragen
app.get('/fragen', async (req, res) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [fragen1] = await connection.query('SELECT * FROM Fragen_1');
        const [fragen2] = await connection.query('SELECT * FROM Fragen_2');
        const [fragen3] = await connection.query('SELECT * FROM Fragen_3');
        const [fragen4] = await connection.query('SELECT * FROM Fragen_4');

        res.json({
            fragen1,
            fragen2,
            fragen3,
            fragen4
        });

        await connection.end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpunkt zum Speichern von Antworten
app.post('/antworten', async (req, res) => {
    const { profil_id, fragen } = req.body; // erwartetes Format: { profil_id: 1, fragen: { fragen_1: [{frage, antwort}, ...], fragen_2: [...], fragen_3: [...], fragen_4: [...] } }

    try {
        const connection = await mysql.createConnection(dbConfig);

        for (const [key, values] of Object.entries(fragen)) {
            for (const { frage, antwort } of values) {
                await connection.query(`INSERT INTO ${key} (profil_id, frage, antwort) VALUES (?, ?, ?)`, [profil_id, frage, antwort]);
            }
        }

        res.json({ message: 'Antworten erfolgreich gespeichert' });
        await connection.end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpunkt zum Abrufen von Profilen und deren Antworten
app.get('/profil/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const connection = await mysql.createConnection(dbConfig);

        const [profil] = await connection.query('SELECT * FROM Profil WHERE id = ?', [id]);
        const [fragen1] = await connection.query('SELECT * FROM Fragen_1 WHERE profil_id = ?', [id]);
        const [fragen2] = await connection.query('SELECT * FROM Fragen_2 WHERE profil_id = ?', [id]);
        const [fragen3] = await connection.query('SELECT * FROM Fragen_3 WHERE profil_id = ?', [id]);
        const [fragen4] = await connection.query('SELECT * FROM Fragen_4 WHERE profil_id = ?', [id]);
        const [bilder] = await connection.query('SELECT * FROM Bilder WHERE profil_id = ?', [id]);

        res.json({
            profil: profil[0],
            fragen1,
            fragen2,
            fragen3,
            fragen4,
            bilder
        });

        await connection.end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Endpunkt zum Erstellen eines neuen Profils
app.post('/profil', async (req, res) => {
    const { name, geburtstag } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.query('INSERT INTO Profil (name, geburtstag) VALUES (?, ?)', [name, geburtstag]);
        res.json({ id: result.insertId, name, geburtstag });
        await connection.end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
