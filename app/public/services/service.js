var app = angular.module('mainApp');

 app.factory('Eneida', ['$http', function($http){

    var eneidaUrl = 'http://localhost:3000/api/eneida/';
    var Eneida ={};

    Eneida.findById = function (id){
        return $http.get(eneidaUrl + id);
    };

    Eneida.load = function(){
        return $http.get(eneidaUrl);
    };

    Eneida.addRow = function(row){
        return $http.post(eneidaUrl, { text : row });
    }

    Eneida.updateRow = function(id, row){
        return $http.put(eneidaUrl + id, { text : row });
    }

    Eneida.deleteRow = function(id){
        return $http.delete(eneidaUrl+id);
    }
    return Eneida;

 }]);