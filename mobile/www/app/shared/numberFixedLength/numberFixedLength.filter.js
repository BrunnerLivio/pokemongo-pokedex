(function(){
    'use strict';

function numberFixedLength() {
    return function (n, len) {
        var num = parseInt(n, 10);
        len = parseInt(len, 10);
        if (isNaN(num) || isNaN(len)) {
            return n;
        }
        num = '' + num;
        while (num.length < len) {
            num = '0' + num;
        }
        return num;
    };
}
angular.module('pokegodex')
    .filter('numberFixedLength', numberFixedLength);

})();
