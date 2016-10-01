var app = angular.module('slideShowApp', []);
app.controller('slideShowContr', function ($scope, $http) {
	$http.get("images").success(function (response) {
		$scope.images = response.images;
	});
});