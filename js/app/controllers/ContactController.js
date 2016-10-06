function ContactController($scope, $timeout) {
	$scope.name = 'Michael Casciato';
	$timeout(function () {
		$scope.name = "Mr. Code Man"
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
