(function () {
    'use strict';

    function PokemonOverviewController(ThemeService, PokegodexHeaderService) {
        var ctrl = this;
        ThemeService.changeColor("#E44A4C");
        PokegodexHeaderService.resetHistoryBackPath();
    }

    angular
        .module('pokegodex')
        .controller('PokemonOverviewController', PokemonOverviewController);

})();