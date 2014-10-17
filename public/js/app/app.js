angular.module("app", ["ui.router", "ui-bootstrap"])

        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

          // $urlRouterProvider.otherwise("/layout");

          $stateProvider
            .state("container", {
              abstract: true,
              templateUrl: "/views/container.html"
            })
            .state("home", {
              url: "/home",
              templateUrl: "/views/home.html"
            })
            .state("container.page1", {
              url: "/page1",
              templateUrl: "/views/page1.html",
              controller: "NewsController"
            })
            .state("container.page2", {
              url: "/page2",
              templateUrl: "views/page2.html",
              controller: "NewsController"
            })

            $locationProvider.html5Mode(true);
        });





