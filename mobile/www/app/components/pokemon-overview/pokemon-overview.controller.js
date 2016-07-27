(function () {
    'use strict';

    function PokemonOverviewController(ThemeService, PokegodexHeaderService) {
        var ctrl = this;
        ThemeService.changeColor("#dc0a2d");
        PokegodexHeaderService.resetHistoryBackPath();
    }

    angular
        .module('pokegodex')
        .controller('PokemonOverviewController', PokemonOverviewController);

})();