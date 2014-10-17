angular.module("app").directive("super", function() {
  return function(scope, element) {
    element.bind("mouseleave", function() {
      console.log("I'a leaving!")
    })
  }
});
