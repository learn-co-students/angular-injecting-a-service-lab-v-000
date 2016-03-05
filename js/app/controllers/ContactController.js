function ContactController($scope, $timeout) {
  $scope.name = 'Bill Gates';

  $timeout(function () {
    // this would be fired after 5 seconds!
    $scope.name = 'Bob';
  }, 5000);
}

angular
  .module('app')
  .controller('ContactController', ContactController);