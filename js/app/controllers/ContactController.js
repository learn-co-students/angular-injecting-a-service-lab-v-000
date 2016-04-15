function ContactController($scope, $timeout) {
	$scope.name = 'Zach Newburgh';

  $timeout(function() {
    $scope.name = 'Something else'
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);