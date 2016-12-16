function ContactController($scope, $timeout) {
	$scope.name = 'Jason';

	$timeout(function() {
		$scope.name = 'Bill';
	}, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);
