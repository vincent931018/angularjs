var myApp = angular.module('myApp');

myApp.factory('httpService', ['$q', '$http', '$rootScope', function($q, $http, $rootScope) {

	var defer = $q.defer();
	var data = {};
	var url = "";

    var getData = function(url,params){
    	var httpConfig = {
	        method: "JSONP",
	        timeout: 3000,
	        data: params,
	        headers: { "Content-Type": "application/x-www-form-urlencoded" },
	        url: "http://192.168.0.107:8093/mock/" + url + "=JSON_CALLBACK",
	        responseType: "json"
	    };
    	$http(httpConfig)
	    .success(function(data){
	    	if(data.success){
	    		defer.resolve(data);
	    	}else{
	    		defer.reject(data);
	    	}
	    })
	    .error(function(data){
	    	return data;
	    });
	    return defer.promise;
    };

    var getResponse = function (url,params) {
            var delay = $q.defer();
            var promise = getData(url,params);
            promise.then(function (data) {
                delay.resolve(data);
            }, function (data) {
                delay.reject(data);
            });
            return delay.promise;
        }

    var httpService = {
    	'getResponse' : getResponse
    };

    return httpService;

}])
