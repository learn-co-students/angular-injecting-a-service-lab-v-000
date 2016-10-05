function ContactController($scope, $timeout) {
	$scope.name = 'Nathaniel Miller';
	$timeout(function(){
		$scope.name = 'Jeffrey Hull';
	}, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
