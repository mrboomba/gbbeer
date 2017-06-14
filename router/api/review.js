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
    req.session.redirectTo = req.headers.referer || req.originalUrl || req.url;
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
    ModelControllers.review.getReviewByBeerId({'beer':productId},(err,beer) =>{
      if(err){
        return res.json({'status':'false'});
      }
      if(!beer[0]){
        beer[0] = {}
      }
      beer[0]['status'] = 'success';
      console.log(beer[0]);

      res.json(beer[0]);
    })
  });

  router.post('/comment',checkAuth,function(req,res){
    var createObj =req.body;
    createObj['user'] = req.session.user_id;
    ModelControllers.review.createReview(createObj,(err,doc)=>{
      if(err) res.status(500).json({'status':false});
      else res.status(200).json({'status':'success'});
    });
  });







    return router;
})();
