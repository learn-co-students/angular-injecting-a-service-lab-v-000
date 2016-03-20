function ContactController($scope, $timeout) {
	$scope.name = 'Kevin';
	$timeout(function () {
		$scope.name = 'Cool Guy';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
