angular.module("app").controller("NewsIndexController", function($scope, $stateParams, Articles) {
  $scope.articles = Articles;

});
