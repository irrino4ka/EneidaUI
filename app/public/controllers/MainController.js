var eneidaUrl = 'http://localhost:3000/api/eneida/';

var app = angular.module('mainApp');

app.controller('MainController', function ($scope, $location, $http) {

    console.log(this);
    var vm = this;

    $http.get(eneidaUrl).then(function success(result){
        vm.eneida = result.data;
        vm.delete = function (id) {
            $http(
                {
                    method: 'DELETE',
                    url: eneidaUrl + id
                })
                .then(function success() {
                    vm.eneida = vm.eneida.filter(function(e) {return e.id !== id;});//??? model return new data
                })
        }

        vm.submit = function() {
            $http(
                {
                    method: 'POST',
                    url: eneidaUrl,
                    data: {
                        text : vm.text
                    }
                })
            .then(function success(result){
                vm.eneida.push(result.data);
                console.log(result.data);
                vm.text = "";
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