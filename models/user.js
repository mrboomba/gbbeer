var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  id:String,
  password:String,
  type:String,
  name:String,
  birthday:Date,
  address:{
    region: String,
    province: String,
    district: String,
    subdistrict: String,
    coordinates: {
      type: [Number],
      index: '2dsphere'
    }
  }
});

var User = mongoose.model('User',userSchema);
module.exports = User;
