angular.module("app").controller("NewsNewController", function($scope, Articles, $state) {
  $scope.addNews = function() {
    Articles.createNew($scope.new).success(function(result) {
      $state.go("layout.news_index");
    });
  }


});
