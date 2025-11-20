const mysql = require('mysql2');

// Create connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // default XAMPP username
  password: '',       // default XAMPP password (empty)
  database: 'test'    // replace with your database name
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting: ' + err.stack);
    return;
  }
  console.log('Connected as id ' + connection.threadId);
});

// Test query
connection.query('SELECT NOW() AS now', (err, results) => {
  if (err) throw err;
  console.log(results);
  connection.end();
});
