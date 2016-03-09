function ContactController($scope, $timeout) {
	$scope.name = 'Not Me';
	$timeout(function() {
		$scope.name = 'Who?'
	}, 2000)
	$timeout(function() {
		$scope.name = 'Me'
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
