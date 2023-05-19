angular.module('AuthApp', [])
      .controller('AuthController', function($scope) {
        $scope.user = {
          username: '',
          password: '',
          repeatPassword: '',
          email: ''
        };

        $scope.register = function() {
          if ($scope.registrationForm.$valid) {
            // Thực hiện xử lý đăng ký tại đây
            console.log('Registration success!');
          } else {
            // Hiển thị thông báo lỗi
            console.log('Form validation failed!');
          }
        };

        $scope.login = function() {
          if ($scope.loginForm.$valid) {
            // Thực hiện xử lý đăng nhập tại đây
            console.log('Login success!');
          } else {
            // Hiển thị thông báo lỗi
            console.log('Form validation failed!');
          }
        };
      });