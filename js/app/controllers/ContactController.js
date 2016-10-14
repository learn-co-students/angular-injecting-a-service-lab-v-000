function ContactController($scope, $timeout) {
	$scope.name = 'Jennifer';
  $timeout(function() {
    $scope.name = 'Jen';
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);