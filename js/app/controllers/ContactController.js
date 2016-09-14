function ContactController($scope, $timeout) {
	$scope.name = 'Josh';

	$timeout(function() {
		$scope.name = 'Billy Bob';
	}, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);
