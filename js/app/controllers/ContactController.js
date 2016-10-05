function ContactController($scope, $timeout) {
	$scope.name = 'Saul';

	$timeout(function(){
		$scope.name = 'Brown'
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
