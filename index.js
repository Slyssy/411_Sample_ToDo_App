// % Imports ..........................................................
const express = require('express');

//% Accessing express and set up server variables .....................
const app = express();

const pool = require('./sql/connection');

// # Check .env file for port variables. If they exist, use those if not, use port 5000.
const PORT = process.env.PORT || 8000;

// # Set up base route to make sure your app is working.
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

app.get('/users', (req, res) => {
  pool.query('SELECT * FROM users', function (err, rows, fields) {
    res.json(rows);
  });
});

// # Use app to listen to the port you defined.
app.listen(PORT, () => console.log(`Listening @ http://localhost:${PORT}`));
