(function () {
    'use strict';

    function PokegodexService($http, $q, PokegodexTypesService) {
        var self = this;
        function loadPokemons() {
            var deferred = $q.defer();

            if (self.pokemons === undefined) {
                $http.get('../../assets/data/Pokemon.json')
                    .then(function (data) {
                        self.pokemons = PokegodexTypesService.modifyPokemonData(data.data);
                        deferred.resolve(self.pokemons);
                    }, function (response) {
                        deferred.reject(response);
                    });
            } else {
                deferred.resolve(self.pokemons);
            }

            return deferred.promise;
        }

        function loadAverage() {
            var deferred = $q.defer();

            if (self.average === undefined) {
                $http.get('../../assets/data/AveragePokemonStats.json')
                    .then(function (data) {
                        self.average = data.data;
                        deferred.resolve(self.average);
                    }, function (response) {
                        deferred.reject(response);
                    });
            } else {
                deferred.resolve(self.average);
            }

            return deferred.promise;
        }

        function getPokemons() {
            var deferred = $q.defer();

            loadPokemons().then(function (data) {
                deferred.resolve(data);
            }, function (response) {
                deferred.reject(response);
            });

            return deferred.promise;
        }

        function getPokemonById(pokemonId) {
            var deferred = $q.defer();
            loadPokemons().then(function (data) {
                var pokemon = data.filter(function (pokemon) {
                    return pokemon.Id == pokemonId;
                })[0];
                deferred.resolve(pokemon);
            }, function (response) {
                deferred.reject(response);
            });

            return deferred.promise;
        }

        function getAverageStats() {
            var deferred = $q.defer();

            loadAverage().then(function (data) {
                deferred.resolve(data);
            }, function (response) {
                deferred.reject(response);
            });

            return deferred.promise;
        }

        var service = {
            getPokemons: getPokemons,
            getPokemonById: getPokemonById,
            getAverageStats:getAverageStats
        };

        return service;
    }

    angular
        .module('pokegodex')
        .factory('PokegodexService', PokegodexService);

})();