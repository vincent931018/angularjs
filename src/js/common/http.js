var myApp = angular.module('myApp');

myApp.factory('httpService', ['$q', '$http', '$rootScope', function($q, $http, $rootScope) {

    var originalConfig = {
        retry: true,
        method: "POST",
        withCredentials: false,
        timeout: 30000,
        data: "",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        url: "",
        responseType: "json"
    };

    var reqConfig = {};
    var reqConfigs = {};

    /**
     * 添加请求属性
     * @param {[type]} arr list
     * MockData(true)
     * noEncryption(true)
     */
    var addReqConfig = function(configArr) {
    	for(var i = 0;i < configArr.length;i++){
    		reqConfig = _.extend({},originalConfig,configArr[i]);
    		reqConfigs[configArr[i].name] = reqConfig;
    	}
    };

    var getReqConfig = function(name) {
    	return reqConfigs[name]
    };

    var defer = $q.defer();

    var getData = function(url, params) {
        httpConfig.data = params;
        httpConfig.url = url;
        $http(httpConfig)
            .success(function(data) {
                if (data.success) {
                    defer.resolve(data);
                } else {
                    defer.reject(data);
                }
            })
            .error(function(data) {
                defer.reject(data);
                return data;
            });
        return defer.promise;
    };

    var getResponse = function(url, params) {
        var delay = $q.defer();
        var promise = getData(url, params);
        promise.then(function(data) {
            delay.resolve(data);
        }, function(data) {
            delay.reject(data);
        });
        return delay.promise;
    }

    var httpService = {
        'getResponse': getResponse,
        'addReqConfig': addReqConfig,
        'getReqConfig': getReqConfig
    };

    return httpService;

}])
