(function () {
    'use strict';
    
    function RoutesConfig($urlRouterProvider, $stateProvider) {
        $stateProvider
            .state('app', {
                abstract: true,
                template: '<div ui-view></div>'
            });

        $stateProvider
            .state('app.main', {
                url: '/',
                templateUrl: 'app/components/pokemon-overview/pokemon-overview.view.html',
                controller: 'PokemonOverviewController',
                controllerAs: 'ctrl'
            });

        $urlRouterProvider.otherwise('/');
    }

    angular.module('pokegodex.routes', ['ui.router'])
        .config(RoutesConfig);
})();