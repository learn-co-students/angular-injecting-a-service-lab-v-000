function ContactController($scope, $timeout) {
	$scope.name = "Sean";

  $timeout(function() {
    $scope.name = "Bob";
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
