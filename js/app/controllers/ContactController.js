function ContactController($scope,$timeout) {
	$scope.name = 'Callie Miller';

  $timeout(function () {
    $scope.name = 'Bill Gates';
  }, 5000);
}


angular
	.module('app')
	.controller('ContactController', ContactController);