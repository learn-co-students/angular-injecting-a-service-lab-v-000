function ContactController($scope, $timeout) {
	$scope.name = 'Peter Jacobson';


$timeout(function () {
  $scope.name = 'Morrissey';
}, 5000);

}

angular
	.module('app')
	.controller('ContactController', ContactController);