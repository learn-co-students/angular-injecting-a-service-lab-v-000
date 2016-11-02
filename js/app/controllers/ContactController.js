function ContactController($scope, $timeout) {
	$scope.name = 'Kaileigh McCrea';

  $timeout(function () {
    $scope.name = 'Tina Fey';
}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);