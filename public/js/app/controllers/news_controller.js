angular.module("app").controller("NewsController", function($scope, Articles) {
  console.log(Articles);

  console.log('nee', Articles.news);
  $scope.articles = Articles;

});
