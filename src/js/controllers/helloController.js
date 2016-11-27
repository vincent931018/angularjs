var myApp = angular.module('myApp');

myApp.controller('helloController',['$scope','httpService',function($scope,httpService){

    $scope.hello = "caowencheng";

    $scope.getData = function(){
    	httpService.getData();
    }

 }]);
