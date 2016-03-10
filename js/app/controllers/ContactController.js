function ContactController($scope, $timeout) {
	$scope.name = 'Bill Gates';
  $timeout(function(){
    $scope.name = "No, I mean Steve Jobs"
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);