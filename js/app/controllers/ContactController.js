function ContactController($scope, $timeout) {
	$scope.name = 'Robert';

	$timeout(function(){
		$scope.name = "Trebor"
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
