var myApp = angular.module('myApp');

myApp.factory('mockInterceptor',['$q',function($q) {

    var mockInterceptor = {
    	request:function(request){

    		var mode = 2;
    		var baseUrl = "http://192.168.0.105:8093/mock/";
    		if(mode == 2){
    			if(request.method == 'JSONP'){
    				request.url = baseUrl + request.url +"?callback=JSON_CALLBACK";
	    		};
	    		return request;
    		}
    	},
    	response:function(response){
    		return response;
    	}
    };
    return mockInterceptor;

}])
