function ContactController($scope, $timeout) {
	$scope.name = 'Jason Southwell';

  $timeout(function () {
    $scope.name = "Donald Trump";
      }, 5000);
  }

angular
	.module('app')
	.controller('ContactController', ContactController);