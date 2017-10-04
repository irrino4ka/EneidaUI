var eneidaUrl = 'http://localhost:3000/api/eneida/';

var app = angular.module('mainApp');

app.controller('EditEneidaRowController', function($routeParams, $location, $http) {
    var vm = this;
    $http.get(eneidaUrl + $routeParams.id).then(function success(result){
        vm.row = result.data.text;
        vm.submit = function() {
            $http(
                {
                    method: 'PUT',
                    url: eneidaUrl + $routeParams.id,
                    data: {
                        id : $routeParams.id,
                        text : vm.row
                    }
                })
            .then(function success(result){
                window.location.replace('/');
            })
        };
    })
})