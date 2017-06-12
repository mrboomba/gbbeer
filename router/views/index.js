module.exports = (() => {
  const fs = require("fs");
  const path = require("path");
  const logger = require(path.resolve(__dirname,'../../config/logger'));
  const express = require('express');
  const router = express.Router();


  router.get('/img/:name',function(req,res){

    res.sendFile(path.resolve(__dirname,"../../img/"+req.params.name));


  })


  logger.log('info','setting up router for view finished');
  return router;
})();
