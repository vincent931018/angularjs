var myApp = angular.module('myApp');

myApp.animation('.fad', function() {
    return {
        enter: function(element, done) {
            element.css({
                position: 'relative',
                opacity: 0,
                left: '200px'
            });
            $(element).animate({
                position: 'relative',
                opacity: 1,
                left: 0
            }, 500, done);
        },
        leave: function(element, done) {
            element.css({
                position: 'relative',
                opacity: 1,
                left: 0
            });
            $(element).animate({
                position: 'relative',
                opacity: 0,
                right: '200px'
            }, 500, done);
        }
    };
});
