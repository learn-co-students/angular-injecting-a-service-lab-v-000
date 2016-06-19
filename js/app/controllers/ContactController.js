function ContactController($scope,$timeout) {
	$scope.name = 'Bill Gates';
	$timeout(function(){
	  $scope.name = "Yo Yo Ma";
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
