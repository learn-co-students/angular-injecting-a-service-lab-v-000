function ContactController($scope, $timeout) {
	$scope.name = 'Brennen Awana';
  $timeout(function() {
    $scope.name = "Name-Changed!"
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);