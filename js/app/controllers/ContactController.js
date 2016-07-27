function ContactController($scope, $timeout) {
	$scope.name = 'Zac Baston';
	$timeout(function(){
		$scope.name = 'Some Words';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
