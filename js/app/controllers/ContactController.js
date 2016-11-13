function ContactController($scope, $timeout) {
	$scope.name = 'Kerry';
  $timeout(function(){
    $scope.name = 'Kevin'
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);