function ContactController($scope, $timeout) {
	$scope.name = 'Taiwei';

  $timeout(function() {
    $scope.name = 'Bob Frank';
  }, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);