function ContactController($scope, $timeout) {
	$scope.name = 'Ann Lee';

  $timeout(function() {
    $scope.name = "Rob Smith";
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);