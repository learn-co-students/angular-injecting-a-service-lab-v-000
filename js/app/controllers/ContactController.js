function ContactController($scope, $timeout) {
	$scope.name = 'Christian Whitesides';
	$timeout(function() {
		$scope.name = "Debbie Parson"
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
