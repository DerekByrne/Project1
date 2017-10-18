angular.module('TodoApp', ['ngRoute','RouteControllers','smoothScroll']);
 
angular.module('TodoApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    });
});