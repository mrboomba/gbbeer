var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beerSchema = new Schema({
  name:String,
  degree:Number,
  color:String,
  brand:String,
  country:String,
  price:Number,
  type:String,
  rate:Number

});

var Beer = mongoose.model('Beer',beerSchema);
module.exports = Beer;
