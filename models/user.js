var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:String,
  password:String,
  role:{
    type:String,
    default:"User"
  },
  firstname:String,
  lastname:String,
  email:String,
  birthday:Date,
  address:String
});

var User = mongoose.model('User',userSchema);
module.exports = User;
