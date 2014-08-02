var app = angular.module('app', ['apiServiceModule']);

app.controller("AppCtrl", function ($scope, $location, _translators, _chapters) {
    var translatorId = $location.search().translator;

    var trans = _translators.get({}, { 'Id': translatorId });
    var chaps = _chapters.query();

    $scope.model = {
        translator: trans,
        chapters: chaps
    }
});


//app.controller("AppCtrl", function ($scope, $location, _translators) {
//    var translatorId = $location.search().translator;

//    var trans = _translators.query({}, { 'Id': translatorId });

//    $scope.model = {
//        translator: trans.Name
//    }
//});