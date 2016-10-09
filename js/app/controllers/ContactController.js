function ContactController($scope, $timeout) {
	$scope.name = 'Gabe';
  $timeout(function() {
    $scope.name = 'Not Gabe';
  }, 5000);

}

angular
	.module('app')
	.controller('ContactController', ContactController);