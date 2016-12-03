var myApp = angular.module('myApp');

myApp.controller('startController', ['$scope', 'startService', function($scope, startService) {

    $scope.start = "caowencheng";
    $scope.hasChecked = false;

    //点击单个复选框
    $scope.showAlert = function(name) {
        alert(name);
    };

    //点击全选
    $scope.clickAll = function() {
    	//TODO
    	if(!$scope.hasCheckedAll){
    		$scope.hasCheckedAll = true;
    		$scope.hasChecked = true;
    	}else{
    		$scope.hasCheckedAll = false;
    		$scope.hasChecked = false;
    	}
    };

}]);
