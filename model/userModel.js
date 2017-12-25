var mysql = require('mysql');
var connection = require("../model/connection");

/*
 * @sqlConnection
 * Creates the connection, makes the query and close it to avoid concurrency conflicts.
 */
var userModel = {
    getAll: function() {
        return new Promise(function (resolve, reject) {
            var query = 'select * from m_role';
                  // It means that the values hasnt been passed
            connection.query(query, function(err, values) {
                if (err) {
                    connection.end();
                    reject(err);
                } else {
                    resolve(values);
                }
            });
        });
         
  
    },
    getByID: function(id) { 
        return new Promise(function (resolve, reject) {
            var query = 'select * from role_name where role_id = ' +id;
                  // It means that the values hasnt been passed
            connection.query(query, function(err, values) {
                if (err) {
                    connection.end();
                    reject(err);
                } else {
                    resolve(values);
                }
            });
        });
    },

    checkUser: function(user, pass){
        return new Promise(function (resolve, reject) {
            
            var query = 'select * from role_name';
                  // It means that the values hasnt been passed
            connection.query(query, function(err, values) {
                if (err) {
            
                    connection.end();
                    reject(err);
                } else {
                    
                    resolve(values);
                }
            });
        });
    }
}
module.exports = userModel;