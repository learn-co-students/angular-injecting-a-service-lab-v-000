function ContactController($scope, $timeout) {
  // set initial value of property 'name'
  $scope.name = 'Antonio David';
  
  // $scope.changeName = function(name) {
  // // inject $timeout service
  //   $timeout(
  //     function() {
  //       // set updated value of property 'name'
  //       $scope.name = $scope.newName;
  //     }, 5000  
  //   );
  // };

  $timeout(function(){
    $scope.name = 'Something Else!';},
    5000
  );
}

angular
  // fetch existing module
	.module('app')
  // attach controller to existing module
	.controller('ContactController', ContactController);