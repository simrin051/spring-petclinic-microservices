'use strict';
var loginApp = angular.module('myloginApp', []);

    loginApp.controller('loginController', function($scope, $http) {
      $scope.user = {};
        $scope.submitForm = function() {
        console.log("Inside login.js");
        $http({
          method  : 'POST',
          url     : 'http://localhost:9000/api/auth/signin',
          data    : $scope.user,
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
         })
          .success(function(data) {
            if (data.errors) {
              $scope.errorName = data.errors.name;
              $scope.errorUserName = data.errors.username;
              $scope.errorEmail = data.errors.email;
            } else {
              $scope.message = data.message;
            }
          });
        };
         $scope.redirect = function(){
                console.log("Inside login.js");
         //     $window.location.href = "signup.html";
            }
    });
