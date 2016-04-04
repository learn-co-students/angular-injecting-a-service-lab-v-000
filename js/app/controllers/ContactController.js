function ContactController($scope, $timeout) {
	$scope.name = 'Tracy';
  $timeout(function () {
    $scope.name = 'Not_my_name';
}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);