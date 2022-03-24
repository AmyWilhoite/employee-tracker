// prompts for commands using node 
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
// Prompt User for Choices
const promptUser = () => {
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
          'Exit'
          ]
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

      //   if (choices === 'Remove Department') {
      //     removeDepartment();
      // }
      //   if (choices === 'Remove Role') {
      //       removeRole();
      //   }
      //   if (choices === 'Remove Department') {
      //     removeDepartment();
      // }

        if (choices === 'Exit') {
            connection.end();
        }
  });
};

module.exports = (promptUser);
