(function () {
    'use strict';

    function PokemonDetailController(PokegodexService, $stateParams, ThemeService, $timeout, PokegodexHeaderService) {
        var ctrl = this;

        PokegodexService.getPokemonById($stateParams.pokemonId)
            .then(function (pokemon) {
                ctrl.pokemon = pokemon;
                ctrl.typeColor = pokemon.Types[0].Color;
                ThemeService.changeColor(ctrl.typeColor);
            });


        ctrl.slideIn = false;

        $timeout(function () {
            ctrl.slideIn = true;
        }, 100);

        PokegodexHeaderService.setHistoryBackPath('/');
    }

    angular
        .module('pokegodex')
        .controller('PokemonDetailController', PokemonDetailController);
})();