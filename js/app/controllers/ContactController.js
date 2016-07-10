function ContactController($scope, $timeout) {
	$scope.name = 'me';


  $timeout(function() {
    $scope.name = 'you';
  }, 5000);

}

angular
	.module('app')
	.controller('ContactController', ContactController);