(function () {
    'use strict';

    function EnergyUsageController() {
        var ctrl = this;
        function makeArray(times){
            var array = [];
            for (var index = 0; index < times; index++)
                array.push(index);
            return array;
        }
        ctrl.timesArray = makeArray(ctrl.times);
    }
    
    angular
        .module('pokegodex')
        .controller('EnergyUsageController', EnergyUsageController);
})();