(function () {
    'use strict';
    function link(scope, element, attrs) {
        console.log(scope);
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
                'type': '=',
                'times': '='
            }
        };
        return directive;
    }

    angular
        .module('pokegodex')
        .directive('energyUsage', energyUsage);
})();