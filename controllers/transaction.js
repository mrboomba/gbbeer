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
    return 1;
  if (a.qty > b.qty)
    return -1;
  return 0;
}
function compare2(a,b) {
if (a.qty < b.qty)
  return 1;
if (a.qty > b.qty)
  return -1;
return 0;
}
  const getRecomend = (bill,callback) => {
    bill.sort(compare);
    console.log(bill[0].item._id);
      models.transaction.find({'beers.beer':bill[0].item._id},function(err,doc){
        var tmp = doc.map(function(a){
          return a.beers;
        });
        console.log(tmp);
        callback(doc);
      })



  }



  return {getTransaction,createTransaction,getRecomend};
})();
