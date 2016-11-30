var myApp = angular.module('myApp');

myApp.service('helloService',['$q','httpService',function($q,httpService){

	this.getData = function(url,params){

		var defer = $q.defer();
		var promise = httpService.getResponse(url,params)
		promise.then(function(data){
			console.log(data);
			defer.resolve(data);
		},function(data){
			defer.reject(data);
		});
	}

}]);
