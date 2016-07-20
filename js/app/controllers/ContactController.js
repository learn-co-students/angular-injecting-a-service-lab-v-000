function ContactController($scope, $timeout) {
	$scope.name = 'Jason Southwell';

  $timeout(function () {
    $scope.name = "Donald Trump";
      // this would be fired after 2 seconds!
      }, 5000);
  }

angular
	.module('app')
	.controller('ContactController', ContactController);