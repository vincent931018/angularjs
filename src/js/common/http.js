var myApp = angular.module('myApp');

myApp.factory('httpService', ['$q', '$http', '$rootScope', function($q, $http, $rootScope) {

	var defer = $q.defer();

    var httpConfig = {
        method: "JSONP",
        timeout: 3000,
        data: {},
        url: "http://192.168.0.107:8093/mock/checkBlackList?callback=JSON_CALLBACK"
    };

    var getData = function(){
    	$http(httpConfig)
	    .success(function(data){
	    	if(data){
	    		console.log(data);
	    		defer.resolve(data);
	    		return data;
	    	}else{
	    		defer.reject(data);
	    		return data;
	    	}
	    });
    };

    var httpService = {
    	'getData' : getData
    };

    return httpService;

}])
