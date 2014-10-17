angular.module("app", ["ui.router", "ui.bootstrap"])

        .config(function($stateProvider, $urlRouterProvider, $locationProvider) {

          // $urlRouterProvider.otherwise("/layout");

          $stateProvider
            .state("layout", {
              abstract: true,
              templateUrl: "/app/templates/container.html"
            })
            .state("layout.news_index", {
              url: "/news",
              templateUrl: "/app/templates/news/index.html",
              controller: "NewsIndexController"
            })
            .state("layout.news_new", {
              url: "/news/new",
              templateUrl: "/app/templates/news/new.html",
              controller: "NewsNewController"
            })

            .state("layout.news_show", {
              url: "/news/:id",
              templateUrl: "/app/templates/news/show.html",
              controller: "NewsShowController"
            })

            $locationProvider.html5Mode(true);
        });





