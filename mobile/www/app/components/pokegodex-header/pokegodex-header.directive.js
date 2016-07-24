(function () {
    'use strict';

    function link(scope, element, attrs) {
    }
    
    function PokegodexHeaderController() {

    }
    function pokegodexHeader() {
        var directive = {
            bindToController: true,
            controller: PokegodexHeaderController,
            controllerAs: 'ctrl',
            link: link,
            templateUrl:'app/components/pokegodex-header/pokegodex-header.template.html',
            restrict: 'E',
            scope: {
            }
        };
        return directive;
    }
    angular
        .module('pokemonGOPokedex')
        .directive('pokegodexHeader', pokegodexHeader);
})();