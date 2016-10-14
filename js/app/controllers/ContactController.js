function ContactController($scope, $timeout) {
	$scope.name = 'Saron';
	$timeout(function () {
		$scope.name = "Bill";
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
