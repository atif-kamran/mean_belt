beltApp.controller('usersController', function($scope, $routeParams, userFactory) {
  // $scope.user = {};
  // $scope.errors = [];
  var id = $routeParams.id;

  $scope.login = function(user) {
    userFactory.login(user, function(data){
    })
  }

  userFactory.viewUser(id, function(data){
    $scope.user = data;
  })


  //   $scope.errors = {};
  //   userFactory.login($scope.user, function(data) {
  //     if (data.errors) {
  //       console.log(data.errors)
  //       $scope.errors = data.errors;
  //       return;
  //     }
  //     else {
  //       userFactory.index(function(data){
  //         $scope.users = data;
  //         $scope.user = null;
  //       })
  //     }
  //   });
  // }



});
