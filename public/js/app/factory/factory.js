angular.module("app").factory("Articles", function() {

  return {news: [{
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
    }]}
});
