(function() {
    'use strict';

    angular
        .module('pokegoapp')
        .directive('typeSquareDirective', typeSquareDirective);

    typeSquareDirective.$inject = ['dependency1'];
    function typeSquareDirective(dependency1) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: ControllerController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;
        
        function link(scope, element, attrs) {
        }
    }
    /* @ngInject */
    function ControllerController () {
        
    }
})();