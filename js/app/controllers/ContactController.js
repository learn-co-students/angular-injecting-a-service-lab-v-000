function ContactController($scope, $timeout) {
	$scope.name = 'Adrian';
	$timeout(function () {
    $scope.name = 'Dave';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
