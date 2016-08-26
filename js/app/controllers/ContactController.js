function ContactController($scope, $timeout) {
	$scope.name = 'natasha';

	$timeout(function () {
	$scope.name = 'something else'
	}, 5000);
}



angular
	.module('app')
	.controller('ContactController', ContactController);
