function ContactController($scope, $timeout) {
	$scope.name = 'Joe LaChance';

	$timeout(function() {
		$scope.name = 'Maria LaChance';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
