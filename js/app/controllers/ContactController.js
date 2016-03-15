function ContactController($scope, $timeout) {
	$scope.name = 'jake';
  $timeout(function(){
    $scope.name = 'judy';
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);