/**
 * @author <%= author%>
 * created on <%= date %>
 */
(function() {

    angular.module('<%= moduleName%>')
        .service('<%= name%>Service', [
            '$rootScope', '$q', 'httpService',
            function($rootScope, $q, httpService) {

                var responseObj = {};

                httpService.addReqConfig([{
                    name: 'queryName',
                    url: '/queryUrl',
                    retry: true,
                    isMock: true,
                    mockData: 'queryUrl.json'
                }]);

                this.getResponse = function() {
                    var delay = $q.defer();
                    var _params = {};
                    var promise = httpService.run(httpService.getReqConfig('queryName'), _params);
                    promise.then(function(data) {
                        responseObj['queryName'] = data.result;
                        delay.resolve(data);
                    }, function(data) {
                        delay.reject(data);
                    })
                    return delay.promise;
                };

            }
        ]);
})();
