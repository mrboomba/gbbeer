var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  amount:Number,
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

var Transaction = mongoose.model('Transaction',transactionSchema);
module.exports = Transaction;
