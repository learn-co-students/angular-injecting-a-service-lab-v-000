function ContactController($scope, $timeout) {
	$scope.name = 'Aaron';

  $timeout(function() {
    $scope.name = 'Jon Snow';
  }, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);