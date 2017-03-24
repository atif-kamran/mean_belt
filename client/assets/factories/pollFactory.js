beltApp.factory('pollFactory', function($http) {
	var factory = {};
	var currentUser = null;

	factory.createPoll = function(newPoll, callback) {
		$http.post('/create', newTopic).then(function(data) {
			callback(data);
		})
	}

	factory.readPolls = function(callback) {
		$http.get('/polls').then(function(data) {
			callback(data);
		})
	}

	factory.getPoll = function(id, callback) {
		$http.get('/polls/'+id).then(function(data) {
			callback(data);
		})
	}

	factory.setUser = function(user, callback) {
		this.currentUser = user;
		callback(currentUser);
	}

	factory.getUser = function(data, callback) {
		this.currentUser = data;
		callback(currentUser);
	}



	return factory;
})
