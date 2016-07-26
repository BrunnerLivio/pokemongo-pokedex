(function () {
    'use strict';

    function ThemeService($q) {
        var deferred = $q.defer();
        
        function changeColor(newColor) {
            deferred.notify(newColor);
        }

        function onColorChanged() {
            return deferred.promise;
        }

        var service = {
            changeColor: changeColor,
            onColorChanged: onColorChanged
        };

        return service;

    }

    angular
        .module('pokegodex')
        .factory('ThemeService', ThemeService);
})();