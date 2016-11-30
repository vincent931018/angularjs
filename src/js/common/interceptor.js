var myApp = angular.module('myApp');

myApp.factory('mockInterceptor',['$q',function($q) {

    var mockInterceptor = {
    	request:function(request){
    		console.log(request);
    		return request;
    	},
    	response:function(response){
    		return response;
    	}
    };
    return mockInterceptor;

}])
