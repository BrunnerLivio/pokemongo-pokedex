(function () {
  'use strict';

  function pokemonDetailMoves() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/pokemon-detail/pokemon-detail-moves/pokemon-detail-moves.template.html',
      controller: 'PokemonDetailMovesController',
      controllerAs: 'ctrl',
      replace: true,
      scope: {
        pokemon: '='
      }
    };
    return directive;
  }

  angular
    .module('pokegodex')
    .directive('pokemonDetailMoves', pokemonDetailMoves);
})();