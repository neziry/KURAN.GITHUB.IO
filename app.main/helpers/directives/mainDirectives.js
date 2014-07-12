var directiveBooksPanel = function () {
    return {
        restrict: 'E',
        templateUrl: '/app.main/views/shared/partials/pBooks.html',
        controller: ['$http', '_translators', function ($http, _translators) {
            var books = this;

            books.Translators = new Array();
            books.Translators = _translators.query();
        }],
        controllerAs: 'Books'
    };
};

var directives = {

    BooksPanel: directiveBooksPanel,


};