function ContactController($scope, $timeout) {
	$scope.name = 'Vin Vasir';
	$timeout(function () {
	    $scope.name = "Prat";
	}, 5000);	
}

angular
	.module('app')
	.controller('ContactController', ContactController);