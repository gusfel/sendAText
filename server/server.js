const express = require('express');
const sendText = require('../test.js');

const app = express();
const port = 3000;
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.post('/send', (req, res) => {
  const { to, message } = req.body;
  sendText(to, message);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
