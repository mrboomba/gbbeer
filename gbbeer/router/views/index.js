module.exports = (() => {
  const fs = require("fs");
  const path = require("path");
  const logger = require(path.resolve(__dirname,'../../../config/logger'));
  const express = require('express');
  const router = express.Router();

  router.get('/',function(req,res){
    res.end('test run');
  })
  router.get('/index',function(req,res){
    res.sendfile(path.resolve(__dirname,"../../dist/index.html"));
  })


  logger.log('info','setting up router for view finished');
  return router;
})();
