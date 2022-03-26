INSERT INTO department (dept_name)
VALUES ("Leadership"),
       ("Human Resources"),
       ("Engineer"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary)
VALUES ("CEO", "400000"),
       ("CFO", "250000"),
       ("COO", "250000"),
       ("CIO", "300000"),
       ("Sr. Engineer", "150000"),
       ("Jr. Engineer", "80000"),
       ("Accounts Receivable", "70000"),
       ("Accounts Payable", "70000"),
       ("Business Development", "200000"),
       ("Sales Support", "100000"),
       ("Attorney", "300000"),
       ("Paralegal", "100000");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jeff", "Teacher", 1, Null),
       ("Sara", "Doe", 1, Null),
       ("Sam", "Lin", 1, Null),
       ("Tim", "Cook", 1, Null),
       ("Jordan", "Smarty", 2, 1),
       ("Sandra", "Stanley", 2, 1),
       ("Elisa", "Shelar", 3, 2),
       ("Kelly", "Daugharty", 3, 2),
       ("Kevin", "Brix", 4, 1),
       ("Kim", "Evans", 4, Null),
       ("John", "Brooks", 5, Null),
       ("Alysse", "Miller", 5, Null);