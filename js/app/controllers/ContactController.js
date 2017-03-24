function ContactController($scope, $timeout) {
	$scope.name = 'Jonathan Foster';

	$timeout(function() {
		$scope.name = "Bonzai!!!!"
	}, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);