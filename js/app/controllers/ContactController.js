function ContactController($scope, $timeout) {
	$scope.name = 'Danny Dawson';
  $timeout(function() {
    $scope.name = "Steve Jobs"
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);