(function () {
    'use strict';

    function PokegodexTypesService() {
        var self = this;

        var colors = {
            grass: '#61A04F',
            poison: '#BB91DD',
            fire: '#E44A4C',
            flying: '#7F8FEE',
            water: '#4D89E1',
            bug: '#80B281',
            normal: '#BBBBAA',
            electric: '#FFCC33',
            fairy: '#FFAAFF',
            ground: '#DDBB55',
            psychic: '#FF5599',
            fighting: '#BB5544',
            rock: '#DDCC99',
            steel: '#AAAABB',
            ice: '#77DDFF',
            ghost: '#6666BB',
            dragon: '#7766EE'
        };

        function getTypeColorByName(name) {
            return colors[name.toLowerCase()];
        }

        function modifyPokemonData(pokemons) {
            return pokemons.map(function (pokemon) {
                pokemon.Types = pokemon.Types.map(function (type) {
                    return {
                        Name: type,
                        Color: getTypeColorByName(type)
                    };
                });
                return pokemon;
            });
        }

        function getShortname(name){
            switch(name.toLowerCase()){
                case 'rock':
                    return 'RCK';
                case 'water':
                    return 'WTR';
                case 'electric':
                    return 'ELK';
                case 'fighting':
                    return 'FGT';
                case 'fire':
                    return 'FIR';
                case 'bug':
                    return 'BUG';
                case 'ground':
                    return 'GRD';
                case 'dragon':
                    return 'DRG';
                case 'ghost':
                    return 'GST';
                case 'ice':
                    return 'ICE';
                case 'steel':
                    return 'STL';
                case 'psychic':
                    return 'PSY';
                case 'fairy':
                    return 'FRY';
                case 'normal':
                    return 'NRL';
                case 'flying':
                    return 'FLY';
                case 'poison':
                    return 'POS';
                case 'grass':
                    return 'GRS';
            }
        }

        var service = {
            modifyPokemonData: modifyPokemonData,
            getTypeColorByName: getTypeColorByName,
            getShortname: getShortname
        };

        return service;
    }

    angular
        .module('pokegodex')
        .factory('PokegodexTypesService', PokegodexTypesService);

})();