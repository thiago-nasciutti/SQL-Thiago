// Requires
const inquirer = require("inquirer");
const connection = require("./db/connection");

// Function: Main Menu
function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            message: "What do you whant to do? ",
            name: "team",
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add department",
                "Add role",
                "Add employee",
                "Update employee role",
                "Exit"
            ]
        }
    ])
        .then((answer) => {
            switch (answer.team) {
                case "View all departments":
                    viewAlldepartments();
                    break;
                case "View all roles":
                    viewAllroles();
                    break;
                case "View all employees":
                    viewAllemployees();
                    break;
                case "Add department":
                    addDepartment();
                    break;
                case "Add role":
                    addRole();
                    break;
                case "Add employee":
                    addEmployee();
                    break;
                case "Update employee role":
                    updateEmployeeRole();
                    break;
                case "Exit":
                    connection.end();
                    break;
            }
        });
};
// Function: View ALl Departments
function viewAlldepartments() {
    const query = "SELECT * FROM department";
    connection.query(query, (err, res) => {
        console.table(res);
        mainMenu();
    });
};
// Function: View All Roles
function viewAllroles() {
    const query = "SELECT * FROM role";
    connection.query(query, (err, res) => {
        console.table(res);
        mainMenu();
    });
};
// Function: View All Employees
function viewAllemployees() {
    const query = "SELECT * FROM employee";
    connection.query(query, (err, res) => {
        console.table(res);
        mainMenu();
    });
};
// Function: Add Department
function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the new department's name?",
            name: "dpt"
        }
    ])
        .then(function (answer) {
            const query = "INSERT INTO department (name) VALUE (?);";
            connection.query(query, [answer.dpt], (err, results) => {
                if (err) {
                    return err;
                } else {
                    viewAlldepartments();
                }
            });
        });
};
// Function: Add Role
function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What role do you wnat to add?",
                name: "rl"
            },
            {
                type: "input",
                message: "What is the salary?",
                name: "sl"
            },
            {
                type: "input",
                message: "What is the department id?",
                name: "did"
            }
        ])
        .then(function (answer) {
            const query = "INSERT INTO role (title, salary, department_id) VALUES (?,?,?);";
            connection.query(query, [answer.rl, answer.sl, answer.did], (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    viewAllroles();
                }
            });
        });
};
// Function: Add Employee
function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the employee's first name?",
            name: "fn",
        },
        {
            type: "input",
            message: "What is the employee's second name?",
            name: "sn",
        },
        {
            type: "input",
            message: "What is the employee's role id?",
            name: "rId",
        },
        {
            type: "input",
            message: "What is the employee's manager id?",
            name: "mId",
        },
    ])
        .then(function (answer) {
            const query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?);";
            connection.query(query, [answer.fn, answer.sn, answer.rId, answer.mId], (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    viewAllemployees();
                }
            });
        });
};
// Function: Update Employee Role
function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the id of the employee you want to update? ",
            name: "eId",
        },
        {
            type: "input",
            message: "What is the new role id? ",
            name: "NRole",
        },
    ])
        .then(function (answer) {
            const query = `UPDATE employee SET role_id = ${answer.NRole} WHERE id = ${answer.eId}`;
            connection.query(query, (err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    viewAllemployees();
                }
            });
        });
};

// Call Menu
mainMenu();