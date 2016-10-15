var signupApp = angular.module('signup-app', []);
signupApp.controller('signup-controller', function ($scope, $http) {
  $scope.signupFormSubmit = function() {
    console.log($scope.email);
    console.log($scope.firstname);
    console.log($scope.lastname);
    console.log($scope.password);
    console.log($scope.passwordConfirm);
  };
});
angular.bootstrap(document.getElementById("signup-modal"), ['signup-app']);