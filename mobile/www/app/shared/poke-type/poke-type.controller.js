(function () {
    'use strict';

    function PokeTypeController(PokegodexTypesService) {
        var ctrl = this;
        ctrl.color = PokegodexTypesService.getTypeColorByName(ctrl.type);
        ctrl.typeshort = PokegodexTypesService.getShortname(ctrl.type);
        console.log(ctrl.type);
    }

    angular
        .module('pokegodex')
        .controller('PokeTypeController', PokeTypeController);
})();