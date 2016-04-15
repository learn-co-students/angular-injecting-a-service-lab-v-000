function ContactController($scope,$timeout) {
	$scope.name = 'Man Kin Marco Tsui';
	$timeout(function() {
		$scope.name = "Dylan Tsui";
	}, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);
