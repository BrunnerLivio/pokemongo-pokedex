(function () {
    'use strict';

    function PokemonDetailController(PokegodexService, $stateParams, ThemeService, $timeout, PokegodexHeaderService, $location) {
        var ctrl = this;

        PokegodexService.getPokemonById($stateParams.pokemonId)
            .then(function (pokemon) {
                ctrl.pokemon = pokemon;
                ctrl.typeColor = pokemon.Types[0].Color;
                ThemeService.changeColor(ctrl.typeColor);
            });


        ctrl.gotoEvolution = function (evolution) {
            $location.path('/pokemon/' + evolution.Id);
        };

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