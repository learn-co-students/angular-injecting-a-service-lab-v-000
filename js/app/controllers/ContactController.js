function ContactController($scope, $timeout) {
	$scope.name = 'Brian';

  $timeout(function () {
    $scope.name = 'Not Brian';
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
