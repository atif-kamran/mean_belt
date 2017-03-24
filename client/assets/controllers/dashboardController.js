beltApp.controller('dashboardController', function($scope, userFactory, pollFactory) {

  userFactory.readUser(function(data) {
      console.log(data);
      $scope.user = data;
  })

  pollFactory.readPolls(function(data) {
		$scope.polls = data;
	})

  socket.on('poll_added', function(data) {
		$scope.$broadcast("new_poll", data);
	})

  // $scope.delete = function(poll) {
  //   pollFactory.delete(poll, function(data){
  //       pollFactory.index(function(data) {
  //         $scope.polls = data;
  //       })
  //   })
  // }





});
