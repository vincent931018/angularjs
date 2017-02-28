var myApp = angular.module('myApp', ['ui.router','ngAnimate']);

myApp.run(['$rootScope','$location', function($rootScope,$location) {

    console.log('angular project is config !');

}]);

myApp.config(['$stateProvider', '$urlRouterProvider','$httpProvider',function($stateProvider,$urlRouterProvider,$httpProvider) {

    $urlRouterProvider.when("", "/start");
    $urlRouterProvider.otherwise('/start');
    $stateProvider
        .state('start', {
            url: '/start',
            views:{
                '':{
                    templateUrl: 'tpls/start.html',
                    controller: 'startController'
                }
            }
        })
        .state('hello', {
            abstract: true,
            url: '/hello',
            views:{
                '':{
                    templateUrl: 'tpls/hello.html',
                    controller: 'helloController'
                }
            }
        })
        .state('hello.hello-child', {
            url: '/hello-child',
            views:{
                'hello-child':{
                    templateUrl: 'tpls/hello-child.html'
                }
            }
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
// angular.element(document).ready(function(){
//     angular.bootstrap(document, ['myApp']);
// });