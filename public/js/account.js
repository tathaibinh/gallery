
var accountApp = angular.module('account-app', []);
//fill the form of login and encoded user infomation and send the http request out.
accountApp.controller('login-controller', function ($scope, $http) {
  $scope.loginFormSubmit = function() {
    // need to set this in order to make the way1 of post work
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    // $http.post way to do it
    var data = $.param({
      'email' : $scope.email,
      'password' : $scope.password,
      'remember_me': $scope.remember_me
    });
    console.log(data);

    $http.post('authenticate', data)
    .success(function (data, status, headers, config) {
        console.log(headers);
    })
    .error(function (data, status, header, config) {
    });
  };
});

//fill the form of signup and encoded user infomation and send the http request out. There
//are two post ways and one get way to inplement it.
accountApp.controller('signup-controller', function ($scope, $http) {
  $scope.signupFormSubmit = function() {
    // need to set this in order to make the way1 of post work
    $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    // $http.post way1 to do it
    var data = $.param({
      'email' : $scope.email,
      'first_name' : $scope.first_name,
      'last_name' : $scope.last_name,
      'password' : $scope.password,
      'confirm_password' : $scope.confirm_password
    });

    $http.post('setup', data)
    .success(function (response, status, headers, config) {
        if (response.success) {
            $scope.status = "you have succesfully created an account!";
        }else{
            $scope.status = "something went wrong on our end!";
        }
        document.getElementById("hello-user").innerHTML = "Hi " + $scope.first_name;
        setTimeout(function(arg1) {
            $('#signup-modal').modal('hide');
        }, 2000);
    })
    .error(function (data, status, header, config) {
    });

    // $http post way2 to do it
    // $http({
    //   url: 'setup',
    //   method: "POST",
    //   data: $.param({
    //     'email' : $scope.email,
    //     'first_name' : $scope.firstname,
    //     'last_name' : $scope.lastname,
    //     'password' : $scope.password,
    //     'confirm_password' : $scope.passwordConfirm
    //   })
    // })
    // .then(function(response) {
    //   console.log(response);
    // },
    // function(response) {
    //   console.log(response);
    // });

    // $http.get way to do it
    // var url = "setup?email=" + $scope.email + "&first_name=" + $scope.firstname 
    //           + "&last_name=" + $scope.lastname + "&password=" + $scope.password
    //           + "&confirm_password=" + $scope.passwordConfirm;
    // $http.get(url).success(function (response) {
    //   console.log(response);
    // });
  };
});
angular.bootstrap(document.getElementById("account-modal"), ['account-app']);