var eneidaUrl = 'http://localhost:3000/api/eneida/';

var app = angular.module('mainApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {
            templateUrl: 'homepage.html',
            controller: 'MainController'
        })
        .when('/:id', {
            templateUrl: 'edit.html',
            controller: 'EditEneidaRowController'
        });
}]);