var myApp = angular.module('myApp');

myApp.directive('start', ['$timeout', 'toolService', function($timeout, tool) {
    var baseUrl = './js/directives/';
    var num = 4;
    var i = tool.getValue('i');



    return {
         restrict:'AE',
        scope: {
            name: '@myName',
            showAlert: '&show',
            hasChecked: '=hasChecked',
            setParentScope:'&',
            setScopeFoo:'&'
        },
        replace: true,
        templateUrl: baseUrl + 'start.html',
        link: function(scope, element, attrs, controller) {
            $timeout(function() {
                console.log(8888899999)
                element.find("input").on('click', function(e) {
                    //点击操作
                    if(!scope.hasChecked){
                        attrs.isSelect = 'true';
                        tool.setValue("i",tool.getValue('i') + 1);
                        console.log("111111====="+tool.getValue('i'))
                    }else{
                        attrs.isSelect = 'false';
                        tool.setValue("i",tool.getValue('i') - 1);
                        console.log("222222====="+tool.getValue('i'))
                    }
                    if (num === tool.getValue('i')) {
                        tool.setValue('hasCheckedAll', true);
                        scope.setParentScope();
                    } else {
                        console.log("执行");
                        scope.setScopeFoo();
                        return;
                    }
                });
            }, 200);
        }
    }
}]);
