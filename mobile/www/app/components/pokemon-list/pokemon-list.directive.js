(function() {
    'use strict';

    function link(scope, element, attrs) {
    }

    function pokemonList() {
        var directive = {
            bindToController: true,
            controller: 'PokemonListController',
            controllerAs: 'ctrl',
            link: link,
            restrict: 'E',
            templateUrl:'app/components/pokemon-list/pokemon-list.template.html'
        };
        return directive;
    }

    angular
        .module('pokegodex')
        .directive('pokemonList', pokemonList);
})();