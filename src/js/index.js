var myApp = angular.module('myApp',['ngRoute']);

myApp.config(['$routeProvider',function($routeProvider){

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

}]);