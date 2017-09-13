function ContactController($scope, $timeout) {
	$scope.name = 'Callie Brazil';

	$timeout(function () {
		$scope.name = "Ben Brazil";
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
