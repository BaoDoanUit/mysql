var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var userController = require('./controller/user')

// pool mysql

// define middleware
app.use(bodyParser.urlencoded({ extended: false }))

app.route('/')
  .get(userController.getAll)
    

app.listen('3000','127.0.0.1');


console.log('—– server is listening —–');