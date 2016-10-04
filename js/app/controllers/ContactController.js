function ContactController($scope, $timeout) {
	$scope.name = 'Steve Jobs';


	$timeout(function() {
		$scope.name = 'Andrew'}, 5000);
}



angular
	.module('app')
	.controller('ContactController', ContactController);