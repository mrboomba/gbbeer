module.exports = (() => {
  const path = require("path");
  const models = require(path.resolve(__dirname, '../models/'));
  const userController = require('./user');
  const async = require('async');
  const MULTIPLE_DOC_ERR = new Error('Got Multiple document(should be one)');

  const getUser = (searchObj, callback) => {
    if (searchObj._id) {
      models.user.findOne({_id : searchObj._id}).exec((err, doc) => callback(err, doc));
      return;
    } else {
      models.user.find(searchObj).exec((err, doc) => callback(err, doc));
      return;
    }
  }

  const createUser = (createObj, callback) => {
    models.user.create(createObj).exec((err) => callback(err));
    return;
  }

  return {getUser,createUser};
})();
