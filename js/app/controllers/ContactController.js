function ContactController($scope, $timeout) {
	$scope.name = 'Pedro';

  $timeout(function () {
    $scope.name = 'Bill Gates'
  },5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);