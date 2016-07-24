(function () {
    'use strict';
    function link(scope, element, attrs) {
    }

    function pokegodexBody() {
        var directive = {
            bindToController: true,
            controller: 'PokegodexBodyController',
            controllerAs: 'ctrl',
            link: link,
            restrict: 'E',
            templateUrl:'app/shared/pokegodex-body/pokegodex-body.template.html',
            transclude:true
        };
        return directive;
    }

    angular
        .module('pokegodex')
        .directive('pokegodexBody', pokegodexBody);
})();