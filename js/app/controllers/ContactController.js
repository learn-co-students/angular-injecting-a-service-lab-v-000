function ContactController($scope, $timeout) {
	$scope.name = 'Vin Vasir';
	$timeout(function () {
	    $scope.name = "Prat";
	}, 2000);	
}

angular
	.module('app')
	.controller('ContactController', ContactController);