function ContactController($scope, $timeout) {
  $scope.name = 'Ryan';
  $timeout(function () {
    $scope.name = 'Man of Many Talents';
  }, 5000);
}

angular
  .module('app')
  .controller('ContactController', ContactController);