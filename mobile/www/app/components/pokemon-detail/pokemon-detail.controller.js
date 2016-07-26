(function () {
    'use strict';

    function PokemonDetailController(PokegodexService, $stateParams, ThemeService, $timeout) {
        var ctrl = this;

        PokegodexService.getPokemonById($stateParams.pokemonId)
            .then(function (pokemon) {
                ctrl.pokemon = pokemon;
            });
        
        ThemeService.changeColor("#406a34");

        ctrl.slideIn = false;

        $timeout(function(){
            ctrl.slideIn= true;
        }, 100);
    }

    angular
        .module('pokegodex')
        .controller('PokemonDetailController', PokemonDetailController);
})();