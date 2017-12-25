var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var userController = require('./controller/userController')

// define middleware
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.static('public'));
app.set("view engine", 'ejs');
app.set('views', './views');

// define routes
app.get('/',function(req,res){
  res.render('home')
})

app.route('/users')
  .get(userController.getAll)
  .post(userController.checkUser)

app.route('/users/:id')
  .get(userController.getById)

app.listen('3000', function() {
  console.log('—– server is listening —–');
});

