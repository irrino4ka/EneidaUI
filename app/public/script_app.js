            var eneidaUrl = 'http://localhost:3000/api/eneida/';

            var app = angular.module('mainApp', ['ngRoute']);
            
            app.controller('MainCntrl', function ($scope, $location, $http) {
                $http.get(eneidaUrl).then(function success(result){
                    $scope.eneida = result.data;
                    $scope.delete = function (id) {
                        $http(
                            {
                                method: 'DELETE',
                                url: eneidaUrl + id
                            })
                            .then(function success() {
                                $scope.eneida = $scope.eneida.filter(function(e) {return e.id !== id;});//??? model return new data
                            })
                    }

                    $scope.submit = function() {
                        $http(
                            {
                                method: 'POST',
                                url: eneidaUrl,
                                data: {
                                    text : $scope.text
                                }
                            })
                        .then(function success(result){
                            $scope.eneida.push(result.data);
                            console.log(result.data);
                            $scope.text = "";
                        })
                    };
                },function error (result){
                    console.error(result);
                    if(result.status === 404){ 
                        window.alert('Not found');
                    } else { 
                        window.alert('unknown error');
                    }
                })
            });
            app.controller('EditEneidaRowController', function($scope, $routeParams, $location, $http) {
                $http.get(eneidaUrl + $routeParams.id).then(function success(result){
                    $scope.row = result.data.text;
                    $scope.submit = function() {
                        $http(
                            {
                                method: 'PUT',
                                url: eneidaUrl + $routeParams.id,
                                data: {
                                    id : $routeParams.id,
                                    text : $scope.row
                                }
                            })
                        .then(function success(result){
                            window.location.replace('/');
                        })
                    };
                })
            })

            app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
                $locationProvider.html5Mode(true);
                $routeProvider
                    .when('/', {
                        templateUrl: '/index.html',
                        controller: 'MainCntrl'
                    })
                    .when('/:id', {
                        templateUrl: '/edit.html',
                        controller: 'EditEneidaRowController'
                    });
            }]);