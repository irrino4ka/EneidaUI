var app = angular.module('mainApp');


// some.factory.js
    app.factory('Eneida', function($http){
    	var eneidaUrl = 'http://localhost:3000/api/eneida/';

    	return {
    		load: function (){
    			return $http.get(eneidaUrl);
    		},
    		findById: function (id, row){
			var row = $http.get(eneidaUrl + id);
    		}
    	} ;

    });
