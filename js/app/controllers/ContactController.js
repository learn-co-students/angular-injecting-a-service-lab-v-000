function ContactController($scope, $timeout) {
	$scope.name = 'ken';
	$timeout(function() {
		$scope.name = "Billy Butterface";
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
