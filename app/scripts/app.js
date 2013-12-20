'use strict';

angular.module('app', [
  'ngRoute',
  'app.filters',
  'app.services',
  'app.directives',
  'app.controllers'
])
.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});
