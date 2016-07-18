function ContactController($scope, $timeout) {
	$scope.name = 'Tej Singh';
  $timeout(function(){
    $scope.name ="Inside Timeout"
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);