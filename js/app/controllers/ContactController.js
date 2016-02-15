function ContactController($scope) {
	$scope.name = 'Bill Gates';
}

angular
	.module('app')
	.controller('ContactController', ContactController);