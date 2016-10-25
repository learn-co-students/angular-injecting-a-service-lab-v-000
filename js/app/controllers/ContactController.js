function ContactController($scope,$timeout) {
	$scope.name = 'Testing Name';

	$timeout(function (){
		$scope.name = 'Better Name'
	},5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
