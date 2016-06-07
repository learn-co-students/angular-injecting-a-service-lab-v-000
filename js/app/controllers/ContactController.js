function ContactController($scope, $timeout) {
	$scope.name = 'Colton Staab';
  $timeout(function () {
    $scope.name = 'Matthew Staab';
  }, 5000);

}

angular
	.module('app')
	.controller('ContactController', ContactController);