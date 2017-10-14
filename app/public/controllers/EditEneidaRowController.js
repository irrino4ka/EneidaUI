//var eneidaUrl = 'http://localhost:3000/api/eneida/';

var app = angular.module('mainApp');

app.controller('EditEneidaRowController', function($routeParams, $location, $http, Eneida) {
    var vm = this;
    Eneida.findById($routeParams.id).then(function success(result){
        vm.row = result.data.text;
    })
     vm.submit = function(){
        Eneida.updateRow($routeParams.id, vm.row).then(function success(result){
             window.location.replace('/');
        })
    }

})