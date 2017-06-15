module.exports = (() => {
  const path = require("path");
  const models = require(path.resolve(__dirname, '../models'));
  const userController = require('./user');
  const reviewController = require('./review');
  const async = require('async');
  const MULTIPLE_DOC_ERR = new Error('Got Multiple document(should be one)');

  const getTransaction = (searchObj, callback) => {
    if (searchObj.user) {
      models.Transaction.findOne({user : searchObj.user_id}).exec((err, doc) => callback(err, doc));
      return;
    } else {
      models.Transaction.find(searchObj).exec((err, doc) => callback(err, doc));
      return;
    }
  }

  const createTransaction = (createObject, callback) => {
    models.transaction.create(createObject,function(err,doc){
      callback(err,doc);
    });
    return ;
  }
  function compare(a,b) {
  if (a.qty < b.qty)
    return -1;
  if (a.qty > b.qty)
    return 1;
  return 0;
}
  const getRecomend = (bill,callback) => {
    console.log(bill);
    bill.sort(compare);
    console.log(bill);
      models.review.find({'beers.beer':bill[0].item._id},function(err,doc){
        console.log(doc);
        callback(doc);
      })



  }



  return {getTransaction,createTransaction,getRecomend};
})();
