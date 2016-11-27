var myApp = angular.module('myApp');

myApp.controller('startController',['$scope','startService',function($scope,startService){

    $scope.start = "caowencheng";

    $scope.clickAll = function(){
    	$scope.checkBox = true;
    }

}]);
