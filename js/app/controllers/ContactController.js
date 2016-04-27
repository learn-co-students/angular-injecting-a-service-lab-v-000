function ContactController($scope, $timeout) {
	$scope.name = 'Matt';
  $timeout(function() {
    $scope.name = "Matthew"
  }, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);