/**
 * @author <%= author%>
 * created on <%= date%>
 */
(function() {
    'use strict';

    angular.module('<%= moduleName%>', [])
        .config([
            '$stateProvider',
            function($stateProvider) {
                $stateProvider
                    .state('<%= name%>', {
                        url: '/<%= name%>',
                        controller:'<%= name%>Ctrl',
                        templateUrl: '<%= tplUrl%>'
                    });
            }
        ]);

})();
