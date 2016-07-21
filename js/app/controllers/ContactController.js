function ContactController($scope, $timeout) {
	$scope.name = 'Bill Gates';
	$timeout(function(){
		$scope.name = 'AND HIS NAME IS JOHN CENA!!!'
	}, 5000)
}

angular
	.module('app')
	.controller('ContactController', ContactController);
