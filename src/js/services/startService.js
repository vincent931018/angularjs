var myApp = angular.module('myApp');

myApp.service('startService',['httpService',function(httpService){

	this.getResponse = httpService.getResponse;

}]);
