const express = require('express');
const path = require('path');
const sendText = require('../test.js');
const client = require('../db/db.js');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/send', (req, res) => {
  const { to, message } = req.body;
  sendText(to, message);
});

app.get('/login', (req, res) => {
  const { username, password } = req.query;
  // const {username, password} = req.params;
  const query = `SELECT * from users WHERE username = '${username}' and password = '${password}'`;
  client.query(query, (err, data) => {
    if (err) { throw err; }
    res.send(data.rows);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
