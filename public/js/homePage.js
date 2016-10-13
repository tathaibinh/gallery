var app = angular.module('slideShowApp', []);
app.controller('slideShowContr', function ($scope, $http) {
	$http.get("images").success(function (response) {
		$scope.Images = response.images;
	});
});

$(document).ready(function() {
  $('#login-button').click(function() {
    alert($('#login-username').val());
    alert($('#login-password').val());
  });
});