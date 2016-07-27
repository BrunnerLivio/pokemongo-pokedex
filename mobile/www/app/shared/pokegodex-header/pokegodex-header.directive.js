(function () {
    'use strict';

    function link(scope, element, attrs) {
    }
    
    function pokegodexHeader() {
        var directive = {
            bindToController: true,
            controller: 'PokegodexHeaderController',
            controllerAs: 'ctrl',
            link: link,
            templateUrl:'app/shared/pokegodex-header/pokegodex-header.template.html',
            restrict: 'E',
            scope: {
            }
        };
        return directive;
    }
    angular
        .module('pokegodex')
        .directive('pokegodexHeader', pokegodexHeader);
})();