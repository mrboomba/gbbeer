var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  ,
  date:{
    type:Date,
    default: Date.now
  },
  user:{
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  beers:[{
    beer:{ type: Schema.Types.ObjectId,
            ref: 'Beer'
          },
    amount:Number
  }]


});

var Transaction = mongoose.model('Transaction',transactionSchema);
module.exports = Transaction;
