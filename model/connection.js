var mysql = require('mysql');

var connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: null,
    database: 'qlsach',
    });

module.exports = connection; 