function ContactController($scope, $timeout) {
	$scope.name = 'steve stephenson';
        $timeout(function(){
          $scope.name = 'john johnson';
        }, 5000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
