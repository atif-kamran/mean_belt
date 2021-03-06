console.log('users controller started');

var mongoose = require('mongoose');
var User = mongoose.model('User');


module.exports = (function()  {

  return {

		create: function(req, res) {
			var newUser = new User(req.body);
			newUser.save(function(err, data) {
				if(err)
					console.log("user 10", err)
				else
					res.json(data)
			})
		},

		read: function(req, res) {
			User.find({}, function(err, data) {
				if(err)
					console.log("user 19", err)
				else
					res.json(data)
			})
		},

		readOne: function(req, res) {
			User.find({ _id: req.params.id }, function(err, data) {
				if(err)
					console.log("user 28", err);
				else
					res.json(data);
			})
		}
  }

})();
