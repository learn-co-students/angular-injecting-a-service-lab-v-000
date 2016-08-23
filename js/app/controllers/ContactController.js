function ContactController($scope, $timeout) {
	$scope.name = 'Cory Adams';
	$timeout(function () {
		$scope.name = 'Rashad in the House';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
