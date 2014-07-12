(function () {
    var app = angular.module('homeModule', []);

    app.directive('booksPanel', function () {
        return {
            restrict: 'E',
            templateUrl: 'app.main/views/shared/partials/_pBooks.html',
            controller: ['$http', function ($http) {
                var books = this;
                books.Translators = new Array();

                $http.get('http://quranservice.azurewebsites.net/api/Translators')
                .success(function (data, status, headers, config) {
                    books.Translators = data;
                }).error(function (data, status, headers, config) {
                    alert(status);
                });
            }],
            controllerAs: 'Books'
        };
    });

})();