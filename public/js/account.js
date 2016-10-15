var signupApp = angular.module('account-app', []);
signupApp.controller('signup-controller', function ($scope, $http) {
  $scope.signupFormSubmit = function() {
    // need to set this in order for it to work
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    // $http.post way to do it
    var data = $.param({
      'email' : $scope.email,
      'first_name' : $scope.firstname,
      'last_name' : $scope.lastname,
      'password' : $scope.password,
      'confirm_password' : $scope.passwordConfirm
    });
    $http.post('setup', data)
    .success(function (data, status, headers, config) {
        console.log(headers);
    })
    .error(function (data, status, header, config) {
    });

    // $http way to do it
    $http({
      url: 'setup',
      method: "POST",
      data: $.param({
        'email' : $scope.email,
        'first_name' : $scope.firstname,
        'last_name' : $scope.lastname,
        'password' : $scope.password,
        'confirm_password' : $scope.passwordConfirm
      })
    })
    .then(function(response) {
      console.log(response);
    },
    function(response) {
      console.log(response);
    });

    // $http.get way to do it
    var url = "setup?email=" + $scope.email + "&first_name=" + $scope.firstname 
              + "&last_name=" + $scope.lastname + "&password=" + $scope.password
              + "&confirm_password=" + $scope.passwordConfirm;
    $http.get(url).success(function (response) {
      console.log(response);
    });
  };
});
angular.bootstrap(document.getElementById("account-modal"), ['account-app']);