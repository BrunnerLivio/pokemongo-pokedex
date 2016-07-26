(function () {
    'use strict';

    function PokemonDetailController(PokegodexService, $stateParams, ThemeService) {
        var ctrl = this;

        PokegodexService.getPokemonById($stateParams.pokemonId)
            .then(function (pokemon) {
                ctrl.pokemon = pokemon;
            });
        
        ThemeService.changeColor("#406a34");
    }

    angular
        .module('pokegodex')
        .controller('PokemonDetailController', PokemonDetailController);
})();