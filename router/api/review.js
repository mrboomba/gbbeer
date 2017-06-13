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

  router.get('/review/:id',function(req,res){
    var productId = req.params.id;
    ModelControllers.review.getReviewByBeerId({'_id':productId},(err,beer) =>{
      if(err){
        return res.redirect('/');
      }
      cart.add(beer,beer._id);
      req.session.cart = cart;
      console.log(req.session.cart);
      res.json({'status':'success'});
    })
  });







    return router;
})();
