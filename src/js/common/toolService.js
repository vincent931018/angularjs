var myApp = angular.module('myApp');

myApp.factory('toolService', ['$rootScope',function($rootScope) {

	var toolObj = {};

	var setValue = function(name,value){
		toolObj[name] = value;
	};

	var getValue = function(name){
		return toolObj[name];
	};

    var toolService = {
    	setValue : setValue,
    	getValue : getValue
    };

    return toolService;

}])
