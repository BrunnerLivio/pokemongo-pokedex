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

        function loadMoves() {
            var deferred = $q.defer();

            if (self.moves === undefined) {
                $http.get('../../assets/data/Move.json')
                    .then(function (data) {
                        self.moves = data.data;
                        deferred.resolve(self.moves);
                    }, function (response) {
                        deferred.reject(response);
                    });
            } else {
                deferred.resolve(self.moves);
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

        function getMoveById(moveId) {
            var deferred = $q.defer();
            loadMoves().then(function (data) {
                var move = data.filter(function (move) {
                    return move.Id == moveId;
                })[0];
                deferred.resolve(move);
            }, function (response) {
                deferred.reject(response);
            });

            return deferred.promise;
        }

        function getMoves(moves) {
            var deferred = $q.defer();
            if (Object.prototype.toString.call(moves) === '[object Array]') {
                var allMoves = [];
                $q.all(moves.map(function (moveId) {
                    return getMoveById(moveId);
                }))
                    .then(function (data) {
                        deferred.resolve(data);
                    }, function (response) {
                        deferred.reject(response);
                    });
            } else if (moves === undefined) {
                loadMoves().then(function (data) {
                    deferred.resolve(data);
                }, function(response){
                    deferred.reject(response);
                });
            }

            return deferred.promise;
        }

        var service = {
            getPokemons: getPokemons,
            getPokemonById: getPokemonById,
            getAverageStats: getAverageStats,
            getMoves: getMoves,
            getMoveById: getMoveById
        };

        return service;
    }

    angular
        .module('pokegodex')
        .factory('PokegodexService', PokegodexService);

})();