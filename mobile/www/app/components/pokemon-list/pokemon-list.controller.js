(function () {
    'use strict';

    function PokemonListController(PokegodexService, $location) {
        var ctrl = this;
        PokegodexService.getPokemons()
            .then(function(data){
                ctrl.pokemons = data;
            });

        ctrl.openPokemon = function(pokemonId){
            $location.path('/pokemon/' + pokemonId);
        };
    }

    angular
        .module('pokegodex')
        .controller('PokemonListController', PokemonListController);
})();