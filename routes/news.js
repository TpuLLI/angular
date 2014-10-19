var New = require("../models/new.js");

module.exports = function(app) {
  app.get("/api/news", function(req, res) {
    New.find(function(err, news) {
      res.send({news: news});
    });
  });

  app.post("/api/news", function(req, res) {
    var createdNew = new New ({
      title: req.body.title,
      body: req.body.body,
      source: req.body.source
    });
    createdNew.save(function(err, showNew) {
      res.status(200);
      res.send({new: showNew});
    });
  });

  app.get("/api/news/:id", function(req, res) {
    New.findById(req.params.id, function(err, showNew) {
      res.send({new: showNew});
    });
  });
}
