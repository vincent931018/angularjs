var myApp = angular.module('myApp');

myApp.controller('helloController',['$scope','helloService','toolService',function($scope,helloService,toolService){

    $scope.hello = "caowencheng";

    var params = {
    	'name':'caowencheng',
    	'age':'24'
    }

    $scope.getData = function(){
    	helloService.getResponse(params).then(function(data){
    			console.log(data);
    		},function(data){

    		});
    }

 }]);
