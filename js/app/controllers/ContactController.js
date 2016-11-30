function ContactController($scope, $timeout) {
	$scope.name = 'John DePippo';
  
  $timeout(function() {
    $scope.name = "Wade Boggs"
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);