function ContactController($scope, $timeout) {
	$scope.name = 'Bill Gates';

	// using the injected service inside the controller
	$timeout(function () {
		$scope.name = 'Mickey Mouse';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
