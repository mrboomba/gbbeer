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
          if(err) {callback (err);
              return;
          }
            newuser.password = hash;
            newuser.save(function(err){
              if(err) console.log(err);
              callback(err,newuser)
            });
          });
        });
      });
    return;
  }

  const checkAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.redirect('/#popup1');
  } else {
    next();
  }
  return ;
  }

  const checkFree = (req, res, next) => {
  if (!req.session.user_id) {
    next();
  }
  return ;
  }


const logIn = (searchObj,callback) => {
  getUser({'username':searchObj.username},(err,user) => {
      if(err||!user[0]){
        callback(err);
        return;
      }
      comparePassword(searchObj.password,user[0].password,(err,isMatch) =>{
        if(err){
          callback(err);
          return;
        }
        if(isMatch) callback(err,isMatch,user[0]);
        return;
      })
      return;
  }
)
}

  const comparePassword = (candidatePassword, hash, callback) => {
   bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if(err) callback(err);
       callback(null, isMatch);
  });
}

  return {getUser,createUser,logIn,checkAuth};
})();
