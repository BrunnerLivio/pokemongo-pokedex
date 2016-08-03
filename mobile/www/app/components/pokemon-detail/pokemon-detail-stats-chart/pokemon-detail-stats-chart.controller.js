(function () {
    'use strict';

    function PokemonDetailStatsChartController(PokegodexService, PokegodexTypesService, $stateParams, PokegodexHeaderService, $scope, $translate, $q) {
        var ctrl = this;
        Chart.defaults.global.tooltips.enabled = false;
        ctrl.drawChart = function (comparePokemon) {
            var ctx = document.getElementById("pokemon-detail-stats-chart").getContext("2d");

            var statsChart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: [ctrl.STA, ctrl.ATK, ctrl.DEF],
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
                            label: comparePokemon.Name,
                            backgroundColor: [
                                '#d8d8d8',
                                '#d8d8d8',
                                '#d8d8d8'
                            ],
                            data: [
                                comparePokemon.Stats.BaseStamina,
                                comparePokemon.Stats.BaseAttack,
                                comparePokemon.Stats.BaseDefense
                            ]
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: ctrl.typeColor,
                                lineWidth: 2,
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                color: ctrl.typeColor,
                                lineWidth: 2,
                                display: false
                            }
                        }]
                    },
                    legend: {
                        display: false
                    }
                }
            });
        };
        ctrl.renderChart = function () {
            ctrl.typeColor = ctrl.pokemon.Types[0].Color;
            $q.all([
                PokegodexService.getAverageStats(), 
                $translate('Application.STA'), 
                $translate('Application.ATK'), 
                $translate('Application.DEF')
            ]).then(function(data){
                var average = data[0];
                average.Name = "Average";                
                ctrl.STA = data[1];
                ctrl.ATK = data[2];
                ctrl.DEF = data[3];
                ctrl.drawChart(average);
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