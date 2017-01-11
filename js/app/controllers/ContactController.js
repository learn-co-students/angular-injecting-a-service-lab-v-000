function ContactController($scope, $timeout) {
	$scope.name = 'Tyler Taylor';

  $timeout(function() {
    // whatever is in this callback function will be fired when the alotted time has passed
    $scope.name = 'Should see this after 5 seconds!'
  }, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);