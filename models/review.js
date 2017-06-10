var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
  star:{
    type:Number,
    max:5,
    min:0
  },
  comment:String,
  date:{
    type:Date,
    default: Date.now
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  beer:{
    type: Schema.Types.ObjectId,
    ref: 'Beer'
  }


});

const Review = mongoose.model('Review',reviewSchema);
module.exports = Review;
