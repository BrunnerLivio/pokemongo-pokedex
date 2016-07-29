(function () {
    'use strict';

    function PokemonDetailStatsChartController(PokegodexService, $stateParams, PokegodexHeaderService, $scope) {
        var ctrl = this;

        ctrl.renderChart = function () {
            ctrl.labels = ['STA', 'ATK', 'DEF'];

            ctrl.series = [ctrl.pokemon.Name, 'Average'];

            Chart.defaults.global.colors = [ctrl.typeColor, "#DCDCDC", "#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"];

            PokegodexService.getAverageStats().then(function (average) {
                ctrl.data = [
                    [
                        ctrl.pokemon.Stats.BaseStamina,
                        ctrl.pokemon.Stats.BaseAttack,
                        ctrl.pokemon.Stats.BaseDefense
                    ],
                    [
                        average.Stats.BaseStamina,
                        average.Stats.BaseAttack,
                        average.Stats.BaseDefense
                    ]
                ];
                console.log(ctrl.data);
            });
        };

        $scope.$watch('pokemon', function (newValue) {
            if (newValue !== undefined) {
                ctrl.pokemon = newValue;
                ctrl.renderChart();
            }
        });
    }

    angular
        .module('pokegodex')
        .controller('PokemonDetailStatsChartController', PokemonDetailStatsChartController);
})();