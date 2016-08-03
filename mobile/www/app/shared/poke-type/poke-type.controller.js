(function () {
    'use strict';

    function PokeTypeController(PokegodexTypesService) {
        var ctrl = this;
        ctrl.color = PokegodexTypesService.getTypeColorByName(ctrl.type);
    }

    angular
        .module('pokegodex')
        .controller('PokeTypeController', PokeTypeController);
})();