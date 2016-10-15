var carouselApp = angular.module('carousel-app', []);
carouselApp.controller('carousel-controller', function ($scope, $http) {
	$http.get("images").success(function (response) {
		$scope.Images = response.images;
	});
});
