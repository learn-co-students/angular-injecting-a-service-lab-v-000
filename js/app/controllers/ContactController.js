function ContactController($scope, $timeout) {
	$scope.name = 'Karuna';
	$timeout(function () {
    // this would be fired after 5 seconds!
		$scope.name = "Sam";
}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
