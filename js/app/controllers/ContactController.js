function ContactController($scope, $timeout) {
	$scope.name = 'Jaclyn Ciringione';

  $timeout(function () {
    $scope.name = 'Orestes Alexis Alvarez-Jacinto';
}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);