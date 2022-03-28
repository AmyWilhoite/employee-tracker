// require inquirer & mysql2
const inquirer = require("inquirer");
const mysql = require("mysql2");
// const userPrompt = require('./lib/prompt');

// prompts for commands using node
const cTable = require("console.table");
const { restoreDefaultPrompts } = require("inquirer");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username/pq
    user: "root",
    password: "rootpass",
    database: "company_db",
  }
  // // insert welcome message here: console.log(`Connected to the company database.`)
);

db.connect((err) => {
  if (err) throw err;
  console.log("Welcome to our company's database");
  connectMessage();
});

// function after connection is established and welcome image shows
connectMessage = () => {
  console.log("*********************************************************");
  console.log("*                  MY COMPANY'S DATABASE                *");
  console.log("*********************************************************");
  promptUser();
};

// TODO: Create an array of questions for user input
// Prompt User for Choices
promptUser = () => {
  inquirer
    .prompt([
      {
        name: "choices",
        type: "list",
        message: "Please select an option:",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add Department",
          "Add Role", //  title, salary, department
          "Add Employee", //first name, last name, role, manager
          "Update Role",
          // 'Remove Department',
          // 'Remove Role',
          // 'Remove Employee',
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      const { choices } = answers;

      if (choices === "View All Departments") {
        viewAllDepartments();
      }

      if (choices === "View All Roles") {
        viewAllRoles();
      }

      if (choices === "View All Employees") {
        viewAllEmployees();
      }

      if (choices === "Add Department") {
        addDepartment();
      }
      if (choices === "Add Role") {
        addRole();
      }
      if (choices === "Add Employee") {
        addEmployee();
      }

      if (choices === "Update Role") {
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
      if (choices === "Exit") {
        db.end();
      }
    });
};

viewAllDepartments = () => {
  const sql = `SELECT * FROM department;`;

  db.query(sql, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
};

viewAllRoles = () => {
  const sql = `SELECT * FROM role`;

  db.query(sql, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
};

viewAllEmployees = () => {
  const sql = `SELECT employee.id,
                      employee.first_name, 
                      employee.last_name, 
                      role.title, 
                      department.dept_name,
                      CONCAT (manager.first_name, " ", manager.last_name) AS manager,
                      role.salary
              FROM employee
                      LEFT JOIN role ON employee.role_id = role.id
                      LEFT JOIN department ON role.department_id = department.id
                      LEFT JOIN employee manager ON employee.manager_id = manager.id`;

  db.query(sql, (err, res) => {
    if (err) throw err;
    console.table(res);
    promptUser();
  });
};

addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDept",
        message: "What department would you like to add?",
        validate(addDept) {
          if (addDept) {
            return true;
          } else {
            console.log("Please enter a valid department");
            return false;
          }
        },
      },
    ])

    .then((answer) => {
      const sql = `INSERT INTO department (dept_name)
                    values (?)`;

      db.query(sql, answer.addDept, (err, res) => {
        if (err) throw err;
        console.log("Added New Department");

        viewAllDepartments();
      });
    });
};

addRole = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the title of the role?",
      },
      {
        type: "input",
        name: "salary",
        message: "What is the role salary amount?",
      },
    ])
    .then((answer) => {
      const params = [answer.title, answer.salary];

      // source data from department table
      const roleSql = `SELECT dept_name, id FROM department`;

      db.query(roleSql, (err, data) => {
        if (err) throw err;

        const dept = data.map(({ dept_name, id }) => ({ name: dept_name, value: id }));

        inquirer
          .prompt([
            {
              type: "list",
              name: "dept",
              message: "Select Department?",
              choices: dept,
            },
          ])
          .then((deptChoice) => {
            const dept = deptChoice.dept;
            params.push(dept);

            const sql = `INSERT INTO role (title, salary, department_id)
                        VALUES (?, ?, ?)`;

            db.query(sql, params, (err, result) => {
              if (err) throw err;
              console.log("Added new role!");

              viewAllRoles();
            });
          });
      });
    });
};

