beltApp.factory('userFactory', function($http, $location) {

  var factory = {};
  var thisUser = null;

  factory.login = function(user, callback) {
		var newUser = true;
		$http.get('/users').then(function(data) {
			angular.forEach(data, function(regUser) {
				if(user.name == regUser.name) {
					console.log(user.name, "matches", regUser.name);
					newUser = false;
					thisUser = regUser
					$location.path('/dashboard');
				}
			})
			if(newUser == true) {
				console.log("User is new, Creating...");
				$http.post('/users', user).then(function(data) {
					console.log("New user has been created...")
					thisUser = data;
					$location.path('/dashboard');
				})
			}
		})
		callback(thisUser);
	}

	factory.readUser = function(callback) {
		callback(thisUser);
	}


	factory.viewUser = function(id, callback) {
		$http.get('/users/'+id).then(function(data) {
			callback(data[0]);
		})
	}

  // factory.index = function(callback) {
  //     //call this method if you want to update or set the friends variable
  //     $http.get('/users').then(function(response){
  //       users = response.data
  //       console.log(response.data);
  //       if (typeof callback === 'function'){
  //         // friends.push(friends)
  //         callback(users);
  //       }
  //     });
  // }
  //
  // factory.show = function(id, callback) {
  //   $http.get('/users/'+id).then(function(returned_data){
  //     if (typeof callback === 'function'){
  //       console.log(returned_data.data)
  //       user = returned_data.data;
  //       callback(user)
  //     }
  //   });
  // }
  //
  // factory.login = function(user, callback) {
  //   $http.post('/users', user).then(function(returned_data){
  //     console.log(returned_data.data)
  //     if (typeof(callback) == 'function'){
  //       user = returned_data.data;
  //       return callback(user);
  //     }
  //   });
  // }
  //
  // factory.update = function(user, callback) {
  //   $http.put('/users/'+user._id, user).then(function(returned_data) {
  //     console.log(returned_data.data);
  //     if (typeof(callback) == 'function'){
  //       callback(returned_data.data);
  //     }
  //   })
  // }
  //
  // factory.delete = function(user, callback) {
  //   $http.delete('/users/'+user._id).then(function(data){
  //     console.log(data.data);
  //     if (typeof(callback) == 'function'){
  //       callback(data.data);
  //     }
  //   })
  // }
  return factory;
});
