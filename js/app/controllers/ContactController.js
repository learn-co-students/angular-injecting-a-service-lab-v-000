function ContactController($scope, $timeout) {
	$scope.name = 'Bill Gates';
  $timeout(() => { $scope.name = 'Steve Jobs' }, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);
