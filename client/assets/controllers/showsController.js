beltApp.controller('showsController', function($scope, userFactory, $routeParams) {
  console.log('Show Controller Loaded')

  userFactory.show($routeParams.id, function(data){
    $scope.user = data
  })
})
