(function() {
    'use strict';

    function pokemonDetailStatsChart() {
        var directive = {
            restrict: 'E',
            controller:'PokemonDetailStatsChartController',
            scope:{pokemon: '='},
            controllerAs:'ctrl',
            templateUrl:'app/components/pokemon-detail/pokemon-detail-stats-chart/pokemon-detail-stats-chart.template.html'
        };
        return directive;
    }

    angular
        .module('pokegodex')
        .directive('pokemonDetailStatsChart', pokemonDetailStatsChart);
})();