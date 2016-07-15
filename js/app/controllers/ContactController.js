function ContactController($scope, $timeout) {
	$scope.name = 'mmmeyers';
	$timeout(function() {
		$scope.name = 'kitten';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
