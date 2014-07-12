(function () {
    var app = angular.module('homeModule', ['apiServiceModule']);

    app.directive('booksPanel', directives.BooksPanel);
})();