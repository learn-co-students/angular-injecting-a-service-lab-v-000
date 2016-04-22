function ContactController($scope, $timeout) {
	$scope.name = 'Your name';

	$timeout(function () {
		$scope.name = "something else"
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
