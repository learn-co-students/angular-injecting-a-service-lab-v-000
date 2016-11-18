function ContactController($scope, $timeout) {
	$scope.name = 'Ben Norris';

	$timeout(function() {
		$scope.name = 'Pentti Saarikoski';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
