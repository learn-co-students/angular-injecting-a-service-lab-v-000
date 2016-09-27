function ContactController($scope, $timeout) {
	$scope.name = 'Adam Taitano';
	$timeout(function() {
		$scope.name = 'Ruby Taitano'
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
