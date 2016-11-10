function ContactController($scope, $timeout) {
	$scope.name = "Kirsten";
	$timeout(function () {
		$scope.name = "Gus";
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
