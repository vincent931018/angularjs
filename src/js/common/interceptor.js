var myApp = angular.module('myApp');

myApp.factory('mockInterceptor', ['$q', function($q) {

    var mockInterceptor = {
        request: function(request) {

        	var mode = 2;  //0 生产环境 1 准生产环境 2 测试环境
            var baseUrl = "";

            if (request.isMock) {
                var data = '';

                if (mode === 0) {
                	//tode 0
                }else if(mode === 1){
                	//todo 1
                }else{
                	request.method = 'JSONP';
                    _.each(request.data, function(v, k) {
                        data += k + "=" + v + "&";
                    });
                    request.data = data.substr(0, data.length - 1);
                    console.log('入参----:' + request.data);
                	baseUrl = "http://192.168.0.108:8093/mock/";
                    request.url = baseUrl + request.url + "?callback=JSON_CALLBACK";
                }
            }
            return request;
        },
        response: function(response) {
            return response;
        }
    };
    return mockInterceptor;

}])
