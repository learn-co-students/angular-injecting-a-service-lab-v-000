function ContactController($scope, $timeout) {
	$scope.name = 'Scotty Runyan';
	$timeout(function() {
		$scope.name = 'Bill Gates';
	}, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);
