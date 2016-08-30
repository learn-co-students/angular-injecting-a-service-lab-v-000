function ContactController($scope, $timeout) {
	// set initial value of property 'name'
  $scope.name = 'Antonio David';
  // inject $timeout service
  $timeout(
    function() {
      // set updated value of property 'name'
      $scope.name = 'My New Name'
    }, 5000  
  );
}

angular
  // fetch existing module
	.module('app')
  // attach controller to existing module
	.controller('ContactController', ContactController);