var myApp = angular.module('myApp');

myApp.controller('startController', ['$scope', 'startService', 'toolService', function($scope, startService, tool) {

    $scope.start = "caowencheng";
    $scope.hasChecked = false;
    $scope.hasCheckedAll = tool.getValue('hasCheckedAll');
    //最好不用 太损耗性能！！！
    // setInterval(function() {　　　　
    //     $scope.$apply(function() {　　　　
    //     	//在这里去手动触发脏检查
    //         $scope.hasCheckedAll = tool.getValue('hasCheckedAll');　　　　
    //     })　　
    // }, 10);


    //点击单个复选框
    $scope.showAlert = function(name) {
        alert(name);
    };

    //点击全选
    $scope.clickAll = function() {
        //TODO
        if (!tool.getValue('hasCheckedAll')) {
            tool.setValue('hasCheckedAll', true);
            tool.setValue('num', 4);
            tool.setValue('i', 4);
            $scope.hasChecked = true;
        } else {
        	tool.setValue('num', 0);
        	tool.setValue('i', 0);
            tool.setValue('hasCheckedAll', false);
            $scope.hasChecked = false;
        }
    };

}]);
