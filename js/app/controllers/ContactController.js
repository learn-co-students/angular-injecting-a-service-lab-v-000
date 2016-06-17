function ContactController($scope, $timeout) {
	$scope.name = 'Tyler Smith';
	$timeout(function () {
    // this would be fired after 2 seconds!
		$scope.name = 'Not Tyler'
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
