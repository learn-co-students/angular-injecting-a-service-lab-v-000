function ContactController($scope, $timeout) {
	$scope.name = 'Michael Simon';
	$timeout(function() {
		$scope.name = 'Jordan Simon';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
