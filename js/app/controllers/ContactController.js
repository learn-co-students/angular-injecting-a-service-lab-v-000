function ContactController($scope, $timeout) {
	$scope.name = 'Bill Gates';
	$timeout(function () {
	    $scope.name = 'John Smith';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);