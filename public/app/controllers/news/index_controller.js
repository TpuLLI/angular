angular.module("app").controller("NewsIndexController", function($scope, $stateParams, Articles, $http) {
  Articles.getNews().success(function(result){
    $scope.articles = result.news;
  });

});
