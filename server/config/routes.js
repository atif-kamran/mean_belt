console.log("future routes");

var path = require('path');
var users = require('./../controllers/users.js')

module.exports = function(beltApp) {

  beltApp.get('/', function(req, res) {
    res.render('index.html');
  }),

  beltApp.get('/users', function(req, res) {
    users.read(req, res);
  }),

  beltApp.get('/users/:id', function(req, res) {
    users.readOne(req, res);
  }),

  beltApp.post('/users', function(req, res) {
    users.create(req, res);
  }),

  beltApp.delete('/users/:id', function(req, res){
    users.delete(req, res);
  })
};
