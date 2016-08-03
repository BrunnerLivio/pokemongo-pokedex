angular.module('pokegodex', ['pokegodex.routes', 'ionic', 'pascalprecht.translate'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
  .config(function ($translateProvider) {

    $translateProvider.useStaticFilesLoader({
      files: [{
        prefix: '../assets/data/translations/',
        suffix: '.json'
      }]
    });
    $translateProvider.preferredLanguage('en');
  });
