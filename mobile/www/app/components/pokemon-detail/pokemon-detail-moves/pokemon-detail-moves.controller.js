(function () {
    'use strict';

    function PokemonDetailMovesController($scope, PokegodexService) {
        var ctrl = this;
        function onPokemonLoaded() {
            PokegodexService.getMoves(ctrl.pokemon.Moves).then(function (moves) {
                ctrl.moves = moves;
            });
            PokegodexService.getMoves(ctrl.pokemon.SpecialMoves).then(function (moves) {
                ctrl.specialMoves = moves;
            });
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