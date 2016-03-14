function ContactController($scope, $timeout) {
	$scope.name = 'Shana Moore';

  $timeout(function () {
    $scope.name = 'Angela Williams'
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);