(function() {
    'use strict';

    function pokemonDetailSpecs() {
        var directive = {
            restrict: 'E',
            templateUrl:'app/components/pokemon-detail/pokemon-detail-specs/pokemon-detail-specs.template.html'
        };
        return directive;
    }

    angular
        .module('pokegodex')
        .directive('pokemonDetailSpecs', pokemonDetailSpecs);
})();