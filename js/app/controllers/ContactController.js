function ContactController($scope,$timeout) {
	$scope.name = 'Edgar Gonzalez';
	$timeout(function(){
		$scope.name = 'Eddie';
	},5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);