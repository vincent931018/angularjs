var myApp = angular.module('myApp');

myApp.directive('start', ['$timeout', 'toolService', function($timeout, tool) {
    var baseUrl = './js/directives/';
    var num = 4;
    var i = 0;



    return {
        restrict: 'E',
        scope: {
            name: '@myName',
            showAlert: '&show',
            hasChecked: '=hasChecked'
        },
        replace: true,
        templateUrl: baseUrl + 'start.html',
        link: function(scope, element, attrs, controller) {
            $timeout(function() {
                element.find('input').on('click', function() {
                    //点击操作
                    if (attrs.isSelect === 'false') {
                        attrs.isSelect = 'true';
                        i = i + 1;
                    } else {
                        tool.setValue('hasCheckedAll', false);
                        attrs.isSelect = 'false';
                        i = i - 1;
                    }
                    if (num === i) {
                        tool.setValue('hasCheckedAll', true);
                    } else {
                        return;
                    }
                });
            }, 1000);
        }
    }
}]);
