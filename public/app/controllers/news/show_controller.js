angular.module("app").controller("NewsShowController", function($scope, $stateParams, Articles) {

  Articles.getNew($stateParams.id).success(function(result) {
    $scope.article = result.new;
  });

  // function findById(arr, id) {
  //   for (var i = 0; i < arr.length; i++) {
  //     if (arr[i].id == id) {
  //       return arr[i];
  //     }
  //   }

  // }
  // $scope.article = findById(Articles.news, $stateParams.id);
});
