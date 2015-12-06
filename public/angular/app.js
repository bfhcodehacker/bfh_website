var bfhApp = angular.module('bfhApp', ['ngRoute', 'ngAnimate', 'ui.bootstrap']);

bfhApp.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/angular/templates/main.html',
      controller:  'MainCtrl'
    }).
    when('/about', {
      templateUrl: '/angular/templates/about.html',
      controller:  'AboutCtrl'
    }).
    when('/firefly', {
      templateUrl: '/angular/templates/firefly.html',
      controller:  'FireFlyCtrl'
    }).
    when('/puzzles/one', {
      templateUrl: '/angular/templates/puzzles/one.html',
      controller:  'PuzzleOneCtrl'
    }).
    when('/puzzles/two', {
      templateUrl: '/angular/templates/puzzles/two.html',
      controller: 'PuzzleTwoCtrl'
    }).otherwise('/');
});

