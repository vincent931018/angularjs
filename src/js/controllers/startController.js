var myApp = angular.module('myApp');

myApp.controller('startController', ['$scope', 'startService', 'toolService', '$animate', function($scope, startService, tool, $animate) {
    tool.setValue("i", 0);
    $scope.start = "caowencheng";
    $scope.a = {};
    $scope.a.hasChecked = false;
    $scope.hasCheckedAll = tool.getValue('hasCheckedAll');

    $scope.setChangeS = function() {
        $scope.hasCheckedAll = 1;
        var phase = $scope.$root.$$phase;
        if (!(phase == '$apply' || phase == '$digest')) {
            $scope.$apply();
        }
    }

    $scope.setChangeF = function() {
        $scope.hasCheckedAll = 0;
        var phase = $scope.$root.$$phase;
        if (!(phase == '$apply' || phase == '$digest')) {
            $scope.$apply();
        }
    }

    $scope.showAlert = function(name) {
        alert(name);
    };

    //点击全选
    $scope.clickAll = function() {
        //TODO
        if (!$scope.hasCheckedAll) {
            tool.setValue("i", 4);
            $scope.hasCheckedAll = 1;
            $scope.a.hasChecked = 1;
        } else {
            tool.setValue('i', 0);
            $scope.hasCheckedAll = 0;
            $scope.a.hasChecked = 0;
        }
    };

}]);
