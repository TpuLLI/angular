var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var New = new Schema({

  title:    {
    type    : String,
    require : true
  },
  body:    {
    type    : String,
    require : true
  },
  source:     {
    type    : String,
    require : true
  },
  modified: {
    type    : Date,
    default : Date.now
  }
});

module.exports = mongoose.model('New', New);
