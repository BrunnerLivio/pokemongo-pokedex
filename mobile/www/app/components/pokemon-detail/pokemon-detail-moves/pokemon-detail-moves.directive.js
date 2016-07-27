(function () {
  'use strict';

  function pokemonDetailMoves() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/pokemon-detail/pokemon-detail-specs/pokemon-detail-moves.template.html'
    };
    return directive;
  }

  angular
    .module('pokegodex')
    .directive('pokemonDetailMoves', pokemonDetailMoves);
})();