module.exports = (() => {
  const express = require('express');
  const path = require('path');
  const router = express.Router();
  const logger = require(path.resolve(__dirname, '../../config/logger'));
  const ModelControllers = require(path.resolve(__dirname, '../../controllers'));
  var Cart = require(path.resolve(__dirname, '../../models/cart'));
  // middleware to use for all requests
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

  router.get('/addtocart/:id',checkAuth,function(req,res){
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {items:{}});

    ModelControllers.beer.getBeer({'_id':productId},(err,beer) =>{
      if(err){
        return res.redirect('/');
      }
      cart.add(beer,beer._id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.json({'status':'success'});
    })
  });

  router.get('/cart',checkAuth,function(req,res) {
    if(!req.session.cart){
      res.json({'status':'empty'});
    }
    else{
      var cart = new Cart(req.session.cart);
    res.json({beers:cart.generateArray(),totalPrice: cart.totalPrice});
  }
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



router.get('/logout',checkFree, function (req, res) {
  delete req.session.user_id;
  res.redirect('/login');
});



    return router;
})();
