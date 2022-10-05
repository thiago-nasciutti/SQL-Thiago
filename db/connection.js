const mysqul = require("mysql2");

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employer_tracker'
    });

connection.connect();

module.exports = connection;