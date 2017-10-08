var app = angular.module('mainApp');

app.controller('MainController', function ( $location, $http, eneidaData) {

    var vm = this;
    eneidaData.load().then(function success(result){
        vm.eneida = result.data;
    });

    vm.submit = function(){
            eneidaData.addRow(vm.text).then(function success(result){
            vm.eneida.push(result.data);
            vm.text = "";
            })
    }

    vm.delete = function(id){
        eneidaData.deleteRow(id).then(function success(result){
            vm.eneida = vm.eneida.filter(function(e) {return e.id !== id;});
        })
    }
});