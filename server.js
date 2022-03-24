// require inquire, mysql2 & console.table
const mysql = require('mysql2');
const conTable = require ('console.table');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username/pq
    user: "root",
    password: "rootpass",
    database: "company_db"
  },
);

  db.connect((err) => {
    if(err) throw err;
    console.log('Connection Failed');
    afterConnection();
});

// insert welcome message here: console.log(`Connected to the company database.`)

// add query file for queries

// view list of all reviews and associated movie name using LEFT JOIN


// CRUD 
// Create a employee

// Read all table types (required)


// Update role (required)

// Delete anything (bonus)


// Default response for any other request (Not Found)
// db.use((req, res) => {
//   res.status(404).end();
// });

// db.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
