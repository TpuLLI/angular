angular.module("app", ["ui.router"])

        .config(function($stateProvider, $urlRouterProvider) {

          // $urlRouterProvider.otherwise("/layout");

          $stateProvider
            .state("home", {
              url: "/layout",
              templateUrl: "layout.html",
            })
            .state("page1", {
              url: "/page1",
              templateUrl: "page1.html",
              controller: "NewsController"
            })
            .state("page2", {
              url: "/page2",
              templateUrl: "page2.html"
            })
        });





