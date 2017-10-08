var app = angular.module('mainApp');

 app.factory('eneidaData', ['$http', function($http){

    var eneidaUrl = 'http://localhost:3000/api/eneida/';
    var eneidaData ={};

    eneidaData.findById = function (id){
        return $http.get(eneidaUrl + id);
    };
    eneidaData.load = function(){
        return $http.get(eneidaUrl);
    };
    eneidaData.addRow = function(row){
        return $http.post(eneidaUrl, {
                    text : row
                });
    }
    eneidaData.updateRow = function(id, row){
    return $http.put(eneidaUrl + id, {
                    text : row
                });
    }

    eneidaData.deleteRow = function(id){
        return $http.delete(eneidaUrl+id);
    }
    return eneidaData;


 }]);