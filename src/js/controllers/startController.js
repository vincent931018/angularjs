var myApp = angular.module('myApp');

myApp.controller('startController', ['$scope', 'startService', 'toolService','$animate', function($scope, startService, tool,$animate) {
    tool.setValue("i",0);
    $scope.start = "caowencheng";
    $scope.a={};
    $scope.a.hasChecked = false;
    $scope.hasCheckedAll = tool.getValue('hasCheckedAll');
    //最好不用 太损耗性能！！！
    // setInterval(function() {　　　　
    //     $scope.$apply(function() {　　　　
    //     	//在这里去手动触发脏检查
    //         $scope.hasCheckedAll = tool.getValue('hasCheckedAll');　　　　
    //     })　　
    // }, 10);

    // $scope.$apply($animate.enter(box, parent, element, function () {
    //                      console.log("Done entering");
    //                  }));
    //点击单个复选框
    $scope.setChangeS = function(){
        $scope.hasCheckedAll=1;
        //$scope.hasChecked=false;
        var phase = $scope.$root.$$phase;
        if (!(phase == '$apply' || phase == '$digest')) {
           $scope.$apply();
        }
    }
     $scope.setChangeF = function(){
        $scope.hasCheckedAll=0;
        var phase = $scope.$root.$$phase;
        if (!(phase == '$apply' || phase == '$digest')) {
           $scope.$apply();
        }
    }
  
    $scope.showAlert = function(name) {
        //alert(name);
    };

    //点击全选
    $scope.clickAll = function() {
        //TODO
        if (!$scope.hasCheckedAll) {
           // tool.setValue('hasCheckedAll', true);
            //tool.setValue('num', 4);
            //tool.setValue('i', 4);
            tool.setValue("i",4);
            $scope.hasCheckedAll=1;
            $scope.a.hasChecked=1;
            // var phase = $scope.$root.$$phase;
            // if (!(phase == '$apply' || phase == '$digest')) {
            //     $scope.$apply();
            // }
        } else {
            console.log(888888)
        	//tool.setValue('num', 0);
        	tool.setValue('i', 0);
            //tool.setValue('hasCheckedAll', false);
            $scope.hasCheckedAll=0;
            $scope.a.hasChecked=0;
            //tool.setValue("i",0);
            // var phase = $scope.$root.$$phase;
            // if (!(phase == '$apply' || phase == '$digest')) {
            //     $scope.$apply();
            // }
        }
    };

}]);
