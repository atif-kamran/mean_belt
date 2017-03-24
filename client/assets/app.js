var beltApp = angular.module('beltApp', ['ngRoute']);
beltApp.config(function ($routeProvider) {
  $routeProvider
      .when("/", {
         templateUrl: "partials/new.html",
         controller: "usersController"
      })

      .when("/dashboard", {
         templateUrl: "partials/dashboard.html",
         controller: "dashboardController"
      })

      .when("/create", {
        templateUrl: "partials/poll.html",
        controller: "pollsController"
      })

      .when("/users/:id", {
        templateUrl: "partials/show.html",
        controller: "showsController"
      })

      .when("/edit/:id", {
         templateUrl: "partials/edit.html",
         controller: "editsController"
      })


      .otherwise({
         redirectTo: "/"
      });

});
