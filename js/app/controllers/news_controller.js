angular.module("app").controller("NewsController", function($scope) {
  news = [
    {
      title: "News1",
      country: "UA",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sint aliquid, ratione repudiandae porro labore possimus necessitatibus explicabo rerum consectetur vero alias quaerat, expedita. Beatae, delectus atque reprehenderit natus voluptatum!",
      canPurchase: true
    },
    {
      title: "News2",
      country: "UK",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt sint aliquid, ratione repudiandae porro labore possimus necessitatibus explicabo rerum consectetur vero alias quaerat, expedita. Beatae, delectus atque reprehenderit natus voluptatum!",
      canPurchase: true
    }
  ];
  console.log('nee', news);
  $scope.articles = news;

});
