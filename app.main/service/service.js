(function () {
    var service = angular.module('apiServiceModule', ['ngResource']);
    var baseUrl = 'http://quranservice.azurewebsites.net';

    // _translators Resource
    service.factory('_translators', function ($resource) {
        return $resource(
            baseUrl + '/api/Translators/:Id',
            { Id: '@Id' }
        );
    });

})();