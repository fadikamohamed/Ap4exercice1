
var app = angular.module('scriptApp', []);

app.controller('increControl', ['$scope', function($scope) {
  $scope.count = 0;
  $scope.plus = function() {
    console.log('clicked');
    $scope.count++;
  }
  $scope.moins = function() {
    console.log('clicked');
    $scope.count--;
  }
}]);
