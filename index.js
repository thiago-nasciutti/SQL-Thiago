const inquirer = require("inquirer");

const connection = require("./db/connection");

const mainMenu = () => {
    inquirer.prompt([
        {
            type: "list",
            message: "Please select one of the options: ",
            name: "team",
            choices: [
                "View all roles",
                "View all employess",
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
                case "View all roles":
                    viewAllroles();
                    break;
                case "View all employess":
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
                    viewAllroles();
                    break;
            }
        });
};

