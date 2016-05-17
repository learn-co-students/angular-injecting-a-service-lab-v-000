function ContactController($scope, $timeout) {
	$scope.name = 'Rachel';

  $timeout(function(){
    $scope.name = 'Something Else';
  }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);