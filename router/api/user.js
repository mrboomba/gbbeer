module.exports = (() => {
  const express = require('express');
  const path = require('path');
  const router = express.Router();
  const logger = require(path.resolve(__dirname, '../../config/logger'));
  const ModelControllers = require(path.resolve(__dirname, '../../controllers'));
  // middleware to use for all requests
  const checkAuth = (req, res, next) => {
  if (!req.session.user_id) {
    res.send('You are not authorized to view this page');
  } else {
    next();
  }
  return ;
  }


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
      email:req.body.email
    }
   ModelControllers.user.createUser(newUser, (err, doc) => {
        if (err) {
          res.status(200).json({'status':'false'});
        } else {
          res.status(200).json({'status':'success'});
        }
      });
  });

  router.route('/login').post((req, res) => {
  var post = req.body;
  ModelControllers.user.logIn(post,(err,isMatch,user) => {
    if (isMatch) {
      req.session.user_id = user._id;
      res.status(200).json({'status':'success'});
    } else {
      res.status(200).json({'status':'false'});
    }
  })
});


router.get('/profile',checkAuth,function(req,res,next){
    res.send('success');
});



// app.get('/logout', function (req, res) {
//   delete req.session.user_id;
//   res.redirect('/login');
// });



    return router;
})();
