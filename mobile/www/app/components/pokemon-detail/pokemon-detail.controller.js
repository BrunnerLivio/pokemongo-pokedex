(function () {
    'use strict';

    function PokemonDetailController(PokegodexService, $stateParams) {
        var ctrl = this;

        PokegodexService.getPokemonById($stateParams.pokemonId)
            .then(function (pokemon) {
                ctrl.pokemon = pokemon;
            });
    }

    angular
        .module('pokegodex')
        .controller('PokemonDetailController', PokemonDetailController);
})();