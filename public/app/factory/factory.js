angular.module("app").factory("Articles", function($http) {

  return {
    getNews: function() {
      return $http.get("/api/news");
    },

    getNew: function(id) {
      return $http.get("/api/news/" + id);
    },

    createNew: function(obj) {
      return $http.post("/api/news", obj);
    }
  }
});
