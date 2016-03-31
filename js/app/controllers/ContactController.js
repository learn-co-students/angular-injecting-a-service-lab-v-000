function ContactController($timeout, $scope) {
	$scope.name = 'your namelol';
  $timeout(function(){
    $scope.name = 'that\'s not funny'
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);