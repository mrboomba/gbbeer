module.exports = (() => {
  const path = require("path");
  const models = require(path.resolve(__dirname, '../models/'));
  const userController = require('./user');
  const async = require('async');
  const MULTIPLE_DOC_ERR = new Error('Got Multiple document(should be one)');
  const bcrypt = require('bcryptjs');

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
    models.user.create(createObj,function (err,newuser){
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newuser.password, salt, (err, hash) => {
          if(err) throw err;
          console.log(hash);
            newuser.password = hash;
            newuser.save(function(err){
              if(err) console.log(err);
              console.log(newuser);
              callback(err,newuser)
            });
          });
        });
      });
    return;
  }

  const comparePassword = (candidatePassword, hash, callback) => {
   bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if(err) throw err;
       callback(null, isMatch);
  });
}

  return {getUser,createUser};
})();
