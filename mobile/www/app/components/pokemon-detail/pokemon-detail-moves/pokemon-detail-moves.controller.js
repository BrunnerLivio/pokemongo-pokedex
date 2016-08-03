(function () {
    'use strict';

    function PokemonDetailMovesController($scope) {
        var ctrl = this;
        function onPokemonLoaded() {
            ctrl.typeColor = ctrl.pokemon.Types[0].Color;
        }
        $scope.$watch('pokemon', function (newValue) {
            if (newValue !== undefined) {
                ctrl.pokemon = newValue;
                onPokemonLoaded();
            }
        });
    }

    angular
        .module('pokegodex')
        .controller('PokemonDetailMovesController', PokemonDetailMovesController);
})();