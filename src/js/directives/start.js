var myApp = angular.module('myApp');

myApp.directive('start', ['$timeout', function($timeout) {

    return {
        restrict: 'E',
        scope: {
        	name : '@myName',
        	showAlert : '&show',
        	hasChecked : '=hasChecked'
        },
        replace: true,
        template: "<div><input type='checkbox' class = 'inputBox' ng-click = 'showAlert({name:name})' ng-checked = 'hasChecked' />{{name}}</div>",
        link: function(scope, element, attrs,controller) {
            $timeout(function() {
                element.find('input').on('click', function() {
                	//点击操作
                });
            }, 1000);
        }
    }
}]);
