const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'send_a_text',
  password: 'postgres',
  port: 5432,
});

client.connect();

module.exports = client;
