function ContactController($scope, $timeout) {
	$scope.name = 'Kris Henderson';
  $timeout(function() {
    $scope.name = "carlos ha"
  }, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);