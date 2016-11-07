var myApp = angular.module('myApp');

myApp.controller('startController',['$scope',function($scope){

    $scope.start = "caowencheng";

    $scope.clickAll = function(){
    	$scope.checkBox = true;
    }

}]);
