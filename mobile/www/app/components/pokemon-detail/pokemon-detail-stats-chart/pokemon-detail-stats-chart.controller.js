(function () {
    'use strict';

    function PokemonDetailStatsChartController(PokegodexService, PokegodexTypesService, $stateParams, PokegodexHeaderService, $scope) {
        var ctrl = this;
        Chart.defaults.global.tooltips.enabled = false;
        ctrl.renderChart = function () {
            ctrl.typeColor = ctrl.pokemon.Types[0].Color;
            PokegodexService.getAverageStats().then(function (average) {
                var ctx = document.getElementById("pokemon-detail-stats-chart").getContext("2d");

                var statsChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['STA', 'ATK', 'DEF'],
                        datasets: [
                            {
                                label: ctrl.pokemon.Name,
                                backgroundColor: [
                                    ctrl.typeColor,
                                    ctrl.typeColor,
                                    ctrl.typeColor
                                ],
                                borderWidth: 1,
                                data: [
                                    ctrl.pokemon.Stats.BaseStamina,
                                    ctrl.pokemon.Stats.BaseAttack,
                                    ctrl.pokemon.Stats.BaseDefense
                                ],
                            },
                            {
                                label: 'Average',
                                backgroundColor: [
                                    '#d8d8d8',
                                    '#d8d8d8',
                                    '#d8d8d8'
                                ],
                                data: [
                                    average.Stats.BaseStamina,
                                    average.Stats.BaseAttack,
                                    average.Stats.BaseDefense
                                ]
                            }
                        ]
                    },
                    options: {
                        responsive: true,
                        scales: {
                            xAxes: [{
                                gridLines: {
                                    color:ctrl.typeColor,
                                    lineWidth:2,
                                    display: false
                                }
                            }],
                            yAxes: [{
                                gridLines: {
                                    color:ctrl.typeColor,
                                    lineWidth:2,
                                    display: false
                                }
                            }]
                        },
                        legend: {
                            display: false
                        }
                    }
                });

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