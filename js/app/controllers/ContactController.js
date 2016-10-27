function ContactController($scope ,$timeout) {
	$scope.name = 'Bill Gates';

  $timeout(function(){
    $scope.name = 'James Rogers';
  }, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);