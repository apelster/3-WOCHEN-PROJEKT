const express = require('express');
const app = express();
app.use(express.json());

async function getUserEntries(userId) {
  const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'mydatabase' });
  const [rows] = await connection.execute('SELECT * FROM entries WHERE userId = ?', [userId]);
  await connection.end();
  return rows;
}

app.get('/profile', authMiddleware, async (req, res) => {
  const userId = req.user.sub;
  try {
    const entries = await getUserEntries(userId);
    res.json(entries);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
