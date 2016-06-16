function ContactController($scope, $timeout) {
	$scope.name = 'Minh Nguyen';
	$timeout(function(){
		$scope.name = 'MASTER!'

	},5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);