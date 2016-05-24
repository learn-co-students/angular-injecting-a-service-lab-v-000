function ContactController($scope, $timeout) {
	$scope.name = 'Lucas';
  $timeout(function() {
    $scope.name = "Calvin"
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);