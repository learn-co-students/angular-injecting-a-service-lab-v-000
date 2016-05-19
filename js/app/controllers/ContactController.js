function ContactController($scope, #timeout) {
	$scope.name = 'Alvin Lu';
  
  $timeout(function() {
    $scope.name = "somrthing else"
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);