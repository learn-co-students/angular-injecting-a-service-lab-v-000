function ContactController($scope, $timeout) {
	$scope.name = 'Butty Gates';

	$timeout(function() {
		$scope.name = "Steve Gobs"
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
