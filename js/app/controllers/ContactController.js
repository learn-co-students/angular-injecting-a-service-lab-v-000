function ContactController($scope, $timeout) {
	$scope.name = 'Alice Balbuena';
	$timeout(function () {
    $scope.name = 'Aliceb';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
