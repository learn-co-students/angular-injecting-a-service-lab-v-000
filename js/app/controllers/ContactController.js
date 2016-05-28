function ContactController($scope, $timeout) {
		$scope.name = 'Billy';
	$timeout(function(){
		$scope.name = 'Aaron Figs';
	}, 5000);

}

angular
	.module('app')
	.controller('ContactController', ContactController);
