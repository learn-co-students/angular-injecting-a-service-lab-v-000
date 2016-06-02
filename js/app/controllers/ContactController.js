function ContactController($scope, $timeout) {
	$scope.name = 'Vidul Parthasarathy';

	$timeout(function() {
		$scope.name = "Bob the Builder";
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
