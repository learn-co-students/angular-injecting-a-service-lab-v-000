function ContactController($scope, $timeout) {
	$scope.name = 'Seth Goldberg';
  $timeout(function(){
    $scope.name = 'Steve McQueen'
  }, 5000); 
}

angular
	.module('app')
	.controller('ContactController', ContactController);