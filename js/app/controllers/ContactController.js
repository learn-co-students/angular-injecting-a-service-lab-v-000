function ContactController($scope, $timeout) {
	$scope.name = 'Adam King';

  $timeout(function() {
    $scope.name = 'A-K';
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
