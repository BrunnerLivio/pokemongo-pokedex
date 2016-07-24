(function () {
    'use strict';

    function PokegodexService($http) {

        function getPokemons() {
        return $http.get('../../assets/data/Pokemon.json');
        }

        var service = {
            getPokemons: getPokemons
        };

        return service;
    }

    angular
        .module('pokegodex')
        .factory('PokegodexService', PokegodexService);

})();