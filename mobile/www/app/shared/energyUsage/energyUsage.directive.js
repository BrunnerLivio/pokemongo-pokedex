(function () {
    'use strict';
    function link(scope, element, attrs) {
    }

    function energyUsage() {
        var directive = {
            bindToController: true,
            controller: 'EnergyUsageController',
            controllerAs: 'ctrl',
            link: link,
            restrict: 'E',
            templateUrl: 'app/shared/energyUsage/energyUsage.template.html',
            transclude: true,
            replace: true,
            scope: {
                'type': '@type',
                'times': '@times'
            }
        };
        return directive;
    }

    angular
        .module('pokegodex')
        .directive('energyUsage', energyUsage);
})();