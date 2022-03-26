// require mysql2
const mysql = require('mysql2');
// const userPrompt = require('./lib/prompt');

  // prompts for commands using node 
  const inquirer = require('inquirer');
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
  // insert welcome message here: console.log(`Connected to the company database.`)
  console.log(`Welcome to our company's database.`)
);

  db.connect((err) => {
    if(err) throw err;
    console.log('Connection Failed');
       promptUser();
  });

// TODO: Create an array of questions for user input
// Prompt User for Choices 
 promptUser = () => {
  inquirer.prompt([
      {
        name: 'choices',
        type: 'list',
        message: 'Please select an option:',
        choices: [
          'View All Departments',
          'View All Roles',
          'View All Employees',
          'Add Department',
          'Add Role',  //  title, salary, department
          'Add Employee',  //first name, last name, role, manager
          'Update Role',
          // 'Remove Department',
          // 'Remove Role',
          // 'Remove Employee',
          'Exit' ]
      }
    ])
    .then((answers) => {
      const {choices} = answers;

        if (choices === 'View All Departments') {
            viewAllDepartments();
        }

        if (choices === 'View All Roles') {
            viewAllRoles();
        }

        if (choices === 'View All Employees') {
            viewAllEmployees();
        }

        if (choices === 'Add Department') {
            addDepartment();
        }
        if (choices === 'Add Role') {
            addRole();
        }
        if (choices === 'Add Employee') {
            addEmployee();
        }

        if (choices === 'Update Role') {
            updateRole();
        }
      // BONUS: DELETE
      //   if (choices === 'Remove Department') {
      //     removeDepartment();
      // }
      //   if (choices === 'Remove Role') {
      //       removeRole();
      //   }
      //   if (choices === 'Remove Department') {
      //     removeDepartment();
        if (choices === 'Exit') {
            db.end();
        };
  });
};

viewAllDepartments = () => {
  console.log('MY COMPANY DEPARTMENTS...\n');
  const sql = `SELECT * FROM department`; 

  db.query(sql, (err, rows) => {
    if (err) throw err;
    console.table(rows);
    promptUser();
  });
};
