(function () {
    'use strict';

    function pokeType() {
        var directive = {
            bindToController: true,
            controller: 'PokeTypeController',
            controllerAs: 'ctrl',
            restrict: 'E',
            replace: true,
            templateUrl: 'app/shared/poke-type/poke-type.template.html',
            scope: {
                type: '@'
            }
        };
        return directive;
    }

    angular
        .module('pokegodex')
        .directive('pokeType', pokeType);
})();