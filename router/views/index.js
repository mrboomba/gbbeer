module.exports = (() => {
  const fs = require("fs");
  const path = require("path");
  const logger = require(path.resolve(__dirname,'../../config/logger'));
  const express = require('express');
  const router = express.Router();

  router.get('/',function(req,res){
    res.end('test run');
  })

  router.get('/index',function(req,res){
    res.sendFile(path.resolve(__dirname,"../../dist/index.html"));
<<<<<<< HEAD
=======

  })
  router.get('/img/:name',function(req,res){

    res.sendFile(path.resolve(__dirname,"../../img/"+req.params.name));
    
>>>>>>> f45541660263f831591a60d9c24a790dcf187933
  })


  logger.log('info','setting up router for view finished');
  return router;
})();
