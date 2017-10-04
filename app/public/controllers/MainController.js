var eneidaUrl = 'http://localhost:3000/api/eneida/';

var app = angular.module('mainApp');

app.controller('MainController', function ($scope, $location, $http) {
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