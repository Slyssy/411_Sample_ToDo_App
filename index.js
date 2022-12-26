// % Imports ..........................................................
const express = require('express');

//% Accessing express and set up server variables .....................
const app = express();

//% Accessing routes from the files inside the routes directory.
const userRoutes = require('./routes/users');
const todoRoutes = require('./routes/todos');
const signupRoutes = require('./routes/signup');
// # Check .env file for port variables. If they exist, use those if not, use port 5000.
const PORT = process.env.PORT || 8000;

// # Use express.json so we can unpack req.body (middleware)
app.use(express.json());

// # Using userRoutes
app.use('/users', userRoutes);
// # Using todoRoutes
app.use('/todos', todoRoutes);
// # Using todoRoutes
app.use('/signup', signupRoutes);

// # Set up base route to make sure your app is working.
app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!',
  });
});

// // # Route to CREATE NEW USER
// app.post('/users', (req, res) => {
//   const { name, email, password } = req.body;
//   // ? Abstracting the variable values
//   const params = [null, name, email, password];
//   pool.query(
//     `INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)`,
//     params,
//     (err, results, fields) => {
//       res.json(results);
//     }
//   );
// });

// // # Route to GET ALL USERS
// app.get('/users', (req, res) => {
//   pool.query('SELECT * FROM users', function (err, rows, fields) {
//     res.json(rows);
//   });
// });

// // # Route to GET USER by id
// app.get('/users/:id', (req, res) => {
//   const { id } = req.params;
//   pool.query(
//     `SELECT * FROM users WHERE id = ${id}`,
//     function (err, rows, fields) {
//       res.json(rows);
//     }
//   );
// });
// // # Route to UPDATE USER by id
// app.put('/users/:id', (req, res) => {
//   const { id } = req.params;
//   pool.query(
//     'UPDATE users SET ? WHERE id = ?',
//     [req.body, id],
//     (err, row, fields) => {
//       res.json(row);
//     }
//   );
// });
// // # Route to DELETE USER by id
// app.delete('/users/:id', (req, res) => {
//   const { id } = req.params;
//   pool.query('DELETE FROM users WHERE id = ?', [id], (err, row, fields) => {
//     res.json(row);
//   });
// });
// # Use app to listen to the port you defined.
app.listen(PORT, () => console.log(`Listening @ http://localhost:${PORT}`));
