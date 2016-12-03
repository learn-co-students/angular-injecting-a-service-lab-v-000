function ContactController($scope, $timeout) {
	$scope.name = 'Steve Frost';
  $timeout(function () {
    $scope.name = "Something Else!";
  }, 5000);
}



angular
	.module('app')
	.controller('ContactController', ContactController);