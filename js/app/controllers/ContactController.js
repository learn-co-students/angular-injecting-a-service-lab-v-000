function ContactController($scope, $timeout) {
	$scope.name = 'Han Lee';
	$timeout(function () {
		// this would be fired after 5 seconds!
		$scope.name = "Donald Trump"
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
