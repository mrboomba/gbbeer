module.exports = (() => {
  const fs = require("fs");
  const path = require("path");
  const logger = require(path.resolve(__dirname,'../../config/logger'));
  const express = require('express');
  const router = express.Router();

  const files = fs.readdirSync(__dirname);

  files.forEach(function(file) {

    if (file !== 'index.js') {
      const moduleName = file.split('.')[0];
      router.use('/', require(path.resolve(__dirname, moduleName)));
    }
  });
  logger.log('info','setting up router for api finished');
  return router;
})();
