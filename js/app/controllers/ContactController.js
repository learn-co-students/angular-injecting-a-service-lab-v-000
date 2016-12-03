function ContactController($scope, $timeout) {
	$scope.name = 'Bobby Gates';

	$timeout(function () {
    $scope.name = "Jimmy Gates";
}, 5000);

}

angular
	.module('app')
	.controller('ContactController', ContactController);
