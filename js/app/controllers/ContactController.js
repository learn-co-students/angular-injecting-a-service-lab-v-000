function ContactController($scope, $timeout) {
	$scope.name = 'Mike Randell';

	$timeout(function () {
		$scope.name = 'Steve Jobs';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
