function ContactController($scope, $timeout) {
	$scope.name = 'Tucker Bohman';
  $timeout(function(){
    $scope.name = "Will Smith";
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);