(function () {
    'use strict';

    function PokegodexHeaderService($q) {
        var deferred = $q.defer();

        function onHistoryBackPathChange(){
            return deferred.promise;
        }
        function setHistoryBackPath(path) {
            deferred.notify(path);
        }
        function resetHistoryBackPath(){
            deferred.notify(null);
        }

        var service = {
            setHistoryBackPath: setHistoryBackPath,
            onHistoryBackPathChange: onHistoryBackPathChange,
            resetHistoryBackPath: resetHistoryBackPath
        };

        return service;
    }

    angular
        .module('pokegodex')
        .factory('PokegodexHeaderService', PokegodexHeaderService);

})();