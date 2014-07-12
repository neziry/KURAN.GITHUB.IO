var directiveBooksPanel = function () {
    return {
        restrict: 'E',
        templateUrl: '/app.main/views/shared/partials/pBooks.html',
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
};

var directives = {

    BooksPanel: directiveBooksPanel,


};