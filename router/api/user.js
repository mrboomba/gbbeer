module.exports = (() => {
  const express = require('express');
  const path = require('path');
  const router = express.Router();
  const logger = require(path.resolve(__dirname, '../../config/logger'));
  const ModelControllers = require(path.resolve(__dirname, '../../controllers'));

  const checkAuth = (req, res, next) => {
  if (!req.session.user_id) {
    req.session.redirectTo = req.headers.referer || req.originalUrl || req.url;
    console.log(checkAuth);
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

  router.route('/islogin').get((req,res) => {
    if(!req.session.user_id){
      res.json({'status':'fail'});
    }
    else{
      res.json({'status':'success'});
    }
    return;
  })


  router.route('/register').post((req, res) => {
    var b = req.body.birthday.split("/");
    userBirthday = new Date(b);
    let newUser = {
      username: req.body.username,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthday:userBirthday,
      address:req.body.address,
      email:req.body.email,
      gender:req.body.gender
    }
   ModelControllers.user.createUser(newUser, (err, doc) => {
        if (err) {
          res.status(200).json({'status':'false'});
        } else {
          res.status(200).json({'status':'success'});
        }
      });
  });

  router.post('/login',checkFree,function(req, res){
  var post = req.body;
  ModelControllers.user.logIn(post,(err,isMatch,user) => {
    if (isMatch) {
      req.session.user_id = user._id;
      if(req.session.redirectTo=='undefined'){

        res.status(200).redirect(req.session.redirectTo);
      }
      else {

        res.status(200).json({'status':'success'});
      }
    } else {
      res.status(200).json({'status':'false'});
    }
  })
});




router.get('/logout',checkAuth, function (req, res) {
  delete req.session.user_id;
  res.redirect('/login');
});



    return router;
})();
