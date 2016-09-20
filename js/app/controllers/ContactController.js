function ContactController($scope, $timeout) {
	$scope.name = 'Mr. Billy Gates';

  $timeout(function () {
  // this would be fired after 5 seconds!
    $scope.name = 'Mr. Bill Gates';
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);