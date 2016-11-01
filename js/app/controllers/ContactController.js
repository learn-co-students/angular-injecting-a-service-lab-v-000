function ContactController($scope, $timeout) {
	$scope.name = 'Jesse Novotny';
  $timeout(function() {
    $scope.name = 'Samantha Novotny';
  }, 5000);
};

angular
	.module('app')
	.controller('ContactController', ContactController);