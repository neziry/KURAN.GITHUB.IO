function homeController($scope, $http) {

    $http.get("http://quranservice.azurewebsites.net/api/Translators")
    .success(function (data, status, headers, config) {
        $scope.Translators = data;
    }).error(function (data, status, headers, config) {
        alert(status);
    });

}