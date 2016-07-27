(function () {
    'use strict';

    function PokegodexHeaderController(PokegodexHeaderService, $location) {
        var ctrl = this;
        PokegodexHeaderService.onHistoryBackPathChange()
            .then(null, null, function (path) {
                ctrl.path = path;
                if (path !== null) {
                    ctrl.leftIcon = "ion-android-arrow-back";
                } else {
                    ctrl.leftIcon = "ion-navicon";
                }
            });

        ctrl.leftIconClick = function () {
            if (ctrl.path !== undefined || ctrl.path !== null) {
                $location.path(ctrl.path);
            }
        };
    }

    angular
        .module('pokegodex')
        .controller('PokegodexHeaderController', PokegodexHeaderController);
})();