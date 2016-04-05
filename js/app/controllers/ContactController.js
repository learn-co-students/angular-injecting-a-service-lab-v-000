function ContactController($scope, $timeout) {
	$scope.name = 'Lisa'
  $timeout(function() {
    $scope.name = 'Scotty';
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);