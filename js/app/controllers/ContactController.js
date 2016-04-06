function ContactController($scope, $timeout) {
	$scope.name = 'Alex Barron';
  $timeout(function() {
    $scope.name = "Alejandro";
  }, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);