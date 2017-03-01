var myApp = angular.module('myApp');

myApp.directive('start', ['$timeout', 'toolService', function($timeout, tool) {
    var baseUrl = './js/directives/';
    var num = 4;
    var i = tool.getValue('i');



    return {
        restrict: 'AE',
        scope: {
            name: '@myName',
            showAlert: '&show',
            hasChecked: '=hasChecked',
            setParentScope: '&',
            setScopeFoo: '&'
        },
        replace: true,
        templateUrl: baseUrl + 'start.html',
        link: function(scope, element, attrs, controller) {
            $timeout(function() {
                element.find("input").on('click', function(e) {
                    //点击操作
                    if (!scope.hasChecked) {
                        attrs.isSelect = 'true';
                        tool.setValue("i", tool.getValue('i') + 1);
                    } else {
                        attrs.isSelect = 'false';
                        tool.setValue("i", tool.getValue('i') - 1);
                    }
                    if (num === tool.getValue('i')) {
                        tool.setValue('hasCheckedAll', true);
                        scope.setParentScope();
                    } else {
                        scope.setScopeFoo();
                        return;
                    }
                });
            }, 200);
        }
    }
}]);
