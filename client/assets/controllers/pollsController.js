beltApp.controller('pollsController', function($scope, userFactory, $location, $routeParams) {
  console.log('Poll Controller Loaded')

  userFactory.show($routeParams.id, function(data){
    $scope.user = data
  })

  $scope.createPoll = function(){
    console.log($scope.user);
    pollFactory.createPoll($scope.poll, function (data){
      $location.url('/')
    })
  }

})
