function ContactController($scope, $timeout) {
  $scope.name = 'Frank';

  $timeout(function(){
    $scope.name = 'Batman';
  }, 5000);
}

angular
  .module('app')
  .controller('ContactController', ContactController);
