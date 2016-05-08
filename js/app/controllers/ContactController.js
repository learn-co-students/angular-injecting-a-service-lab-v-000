function ContactController($scope, $timeout) {
	$scope.name = 'Don';

  $timeout(function(){
    $scope.name ='Mimi';
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);