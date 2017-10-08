var app = angular.module('mainApp');

app.controller('MainController', function ( $location, $http, Eneida) {

    var vm = this;
    Eneida.load().then(function success(result){
        vm.eneida = result.data;
    });

    vm.submit = function(){
        Eneida.addRow(vm.text).then(function success(result){
            vm.eneida.push(result.data);
            vm.text = "";
        })
    }

    vm.delete = function(id){
        Eneida.deleteRow(id).then(function success(result){
            vm.eneida = vm.eneida.filter(function(e) {return e.id !== id;});
        })
    }
});