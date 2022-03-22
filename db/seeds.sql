INSERT INTO department (dept_name)
VALUES ("Leadership"),
       ("Human Resources"),
       ("Engineer"),
       ("Finance"),
       ("Legal");

INSERT INTO role (department_id, title, salary)
VALUES ("1", "Leadership", "CEO", "400000"),
       ("1","Leadership", "CFO", "250000"),
       ("1","Leadership", "COO", "250000"),
       ("1","Leadership", "CIO", "300000"),
       ("2","Engineering", "Sr. Engineer", "150000"),
       ("2","Engineering", "Jr. Engineer", "80000"),
       ("3","Finance", "Accounts Receivable", "70000"),
       ("3","Finance", "Accounts Payable", "70000"),
       ("4","Sales", "Business Development", "200000"),
       ("4","Sales", "Sales Support", "100000"),
       ("5","Legal", "Attorney", "300000"),
       ("5","Legal", "Paralegal", "100000");

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