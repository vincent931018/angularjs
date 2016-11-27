var myApp = angular.module('myApp');

myApp.service('helloService',['httpService',function(httpService){

	this.getResponse = httpService.getResponse;

}]);
