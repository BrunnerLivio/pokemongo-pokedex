(function () {
    'use strict';

    function PokegodexBodyController(ThemeService, $timeout) {
        var ctrl = this;
        ctrl.isBackgroundExtened = false;
        ThemeService.onColorChanged().then(null,null,function(newColor){
            ctrl.animatedBackgroundColor = newColor;
            ctrl.isBackgroundExtened = true;
            $timeout(function(){
                ctrl.backgroundColor = newColor;
                ctrl.isBackgroundExtened = false;
            }, 500);
        });
    }
    
    angular
        .module('pokegodex')
        .controller('PokegodexBodyController', PokegodexBodyController);
})();