function ContactController($scope, $timeout) {
	$scope.name = 'Cernan Bernardo';

	$timeout(function(){
		$scope.name = "Ashley Bernardo";
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
