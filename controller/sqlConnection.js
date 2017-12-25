var mysql   = require('mysql');
 const  connection  = require("./model/connection");

/*
 * @sqlConnection
 * Creates the connection, makes the query and close it to avoid concurrency conflicts.
 */
var sqlConnection = function(sql, values) {

    // It means that the values hasnt been passed
 
    connection.query(sql, values, function(err) {
        
        if (err) {
            connection.end();
        }
        else{
            
        connection.query(sql,function(req,res){
            res.json(values);
        });
    }
    });
}
module.exports = sqlConnection;