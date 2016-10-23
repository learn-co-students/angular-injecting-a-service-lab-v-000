function ContactController($scope, $timeout) {
	$scope.name = 'Peter Humphrey';
	$timeout(function () {
    $scope.name = 'Peter Humphrey After 2 Seconds';
}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
