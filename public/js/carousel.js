//send request to server in order to get the images and display in carousel. 
var carouselApp = angular.module('carousel-app', []);
carouselApp.controller('carousel-controller', function ($scope, $http) {
	$http.get("images").success(function (response) {
		$scope.Images = response.images;
	});
});
