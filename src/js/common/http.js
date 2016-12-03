var myApp = angular.module('myApp');

myApp.factory('httpService', ['$q', '$http', '$rootScope','GibberishAES','JSEncrypt', function($q, $http, $rootScope,GibberishAES,JSEncrypt) {

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
        for (var i = 0; i < configArr.length; i++) {
            reqConfig = _.extend({}, originalConfig, configArr[i]);
            reqConfigs[configArr[i].name] = reqConfig;
        }
    };

    var getReqConfig = function(name) {
        return reqConfigs[name];
    };

    var RSA = function() {
        // 获取公钥KEY(获取后端KEY)
        var publicKey = '';
        // REA加密组件JS方法
        var RSAUtils = new JSEncrypt();
        // 设置公钥
        RSAUtils.setPublicKey(publicKey);
        return {
            generateMixed: function() {
                var jschars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
                var key = "";
                for (var i = 0; i < 16; i++) {
                    var id = Math.ceil(Math.random() * 35);
                    key += jschars[id];
                }
                return key;
            },
            AES_Encode: function(plain_text, key) {
                GibberishAES.size(128);
                return GibberishAES.aesEncrypt(plain_text, key);
            },
            RSA_Encode: function(key) {
                return RSAUtils.encrypt(key);
            }
        };
    };

    var defer = $q.defer();

    var getData = function(name, params) {
        //如果加密
        if (!reqConfigs[name].noEncryption) {
            var rsa = new RSA();
            var _key = rsa.generateMixed();
            _params = {
                "creditPay": rsa.AES_Encode(JSON.stringify(params), _key),
                "encodeKey": rsa.RSA_Encode(_key)
            };
        }else{
            _params = params;
        }
        reqConfigs[name].data = _params;
        $http(reqConfigs[name])
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

    var getResponse = function(name, params) {
        var delay = $q.defer();
        var promise = getData(name, params);
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
