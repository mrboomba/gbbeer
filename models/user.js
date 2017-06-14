var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:{
    type:String,
    unique: true
  },
  password:String,
  role:{
    type:String,
    default:"User"
  },
  firstname:String,
  lastname:String,
  email:String,
  birthday:Date,
  address:String,
  gender:String
});

var User = mongoose.model('User',userSchema);
module.exports = User;
