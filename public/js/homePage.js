var app = angular.module('slideShowApp', []);
app.controller('slideShowContr', function ($scope, $http) {
	//I think there is problem in get() path is not correct?
	$http.get("../../controllers//images").success(function (response) {
		$scope.Images = response.images;
		//test if the images can be accessed
		console.log("hello");
	});
});