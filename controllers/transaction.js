module.exports = (() => {
  const path = require("path");
  const models = require(path.resolve(__dirname, '../models'));
  const userController = require('./user');
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



  return {getTransaction,createTransaction};
})();
