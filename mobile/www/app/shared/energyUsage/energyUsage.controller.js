(function () {
    'use strict';

    function EnergyUsageController() {
        var ctrl = this;
        console.log(ctrl);
    }
    
    angular
        .module('pokegodex')
        .controller('EnergyUsageController', EnergyUsageController);
})();