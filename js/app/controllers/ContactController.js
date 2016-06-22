function ContactController($scope,$timeout) {
$scope.name = 'Jake';
	$timeout(function () {
    // this would be fired after 5 seconds!
		$scope.name = 'Something else!';
}, 5000);


}

angular
	.module('app')
	.controller('ContactController', ContactController);
