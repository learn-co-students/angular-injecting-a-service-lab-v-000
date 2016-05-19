function ContactController($scope, $timeout) {
	$scope.name = 'Michael';
  $timeout(function(){
    $scope.name = 'authorbeard'
  }, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);