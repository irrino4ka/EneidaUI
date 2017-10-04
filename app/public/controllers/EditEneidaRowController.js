var eneidaUrl = 'http://localhost:3000/api/eneida/';

var app = angular.module('mainApp');

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