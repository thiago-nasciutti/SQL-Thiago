USE employer_tracker;

INSERT INTO department(name)
VALUES ("Sales"),
       ("Production"),
       ("Engineering"),
       ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("manager", 140000, 1),
       ("operator", 45000, 2),
       ("emgineer", 90000, 3),
       ("sales_rep", 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Thiago", "Borges", 1, NULL),
       ("Bruno", "Pastel", 3, 1);          
    