function ContactController($scope, $timeout) {
	$scope.name = 'Branden Miller';

  $timeout(function() {
    $scope.name = 'TyDell Miller'
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);