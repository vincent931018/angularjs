var myApp = angular.module('myApp', ['ngRoute']);

myApp.run(['$rootScope', function($rootScope) {

    console.log('angular project is config !');

}]);

myApp.config(['$routeProvider', '$httpProvider',function($routeProvider,$httpProvider) {

    $routeProvider
        .when('/start', {
            templateUrl: 'tpls/start.html',
            controller: 'startController'
        })
        .when('/hello', {
            templateUrl: 'tpls/hello.html',
            controller: 'helloController'
        })
        .otherwise({
            redirectTo: '/start'
        });

        $httpProvider.interceptors.push('mockInterceptor');

}]);

myApp.controller('globalController',['$rootScope','globalService', function($rootScope,globalService) {

    console.log('globalController is config !');

}]);

myApp.service('globalService',['$rootScope', function($rootScope) {

    console.log('globalService is config !');

}]);

//手动启动angularjs项目
angular.element(document).ready(function(){
    angular.bootstrap(document, ['myApp']);
});