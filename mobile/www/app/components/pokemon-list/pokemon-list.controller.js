(function () {
    'use strict';

    function PokemonListController(PokegodexService) {
        var ctrl = this;
        PokegodexService.getPokemons().success(function(data){
            ctrl.pokemons = data;
        });
    }

    angular
        .module('pokegodex')
        .controller('PokemonListController', PokemonListController);
})();