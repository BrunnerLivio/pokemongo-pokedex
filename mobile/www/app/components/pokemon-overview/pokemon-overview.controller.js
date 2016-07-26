(function () {
    'use strict';

    function PokemonOverviewController(ThemeService) {
        var ctrl = this;
        ThemeService.changeColor("#dc0a2d");
    }

    angular
        .module('pokegodex')
        .controller('PokemonOverviewController', PokemonOverviewController);

})();