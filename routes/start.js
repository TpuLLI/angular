module.exports = function(app) {
  app.get("*", function(req, res) {
    res.sendfile(rootPath + "/public/views/start.html");
  });
}
