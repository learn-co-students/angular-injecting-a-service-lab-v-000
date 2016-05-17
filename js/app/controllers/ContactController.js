function ContactController($scope, $timeout) {
	$scope.name = 'Kay Bee';
	$timeout(function () {
    // this would be fired after 2 seconds!
		$scope.name = 'Kay Been There';
}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
