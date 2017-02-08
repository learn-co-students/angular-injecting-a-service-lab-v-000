function ContactController($scope, $timeout) {
	$scope.name = 'Hilary';

	$timeout(function() {
		$scope.name = 'Bethany';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
