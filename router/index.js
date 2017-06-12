module.exports = (() => {
  const express = require('express');
  const router = express.Router();
  const debug = require('debug')('router setting');
  debug('setting up router');
  router.use('/api', require('./api'));
  router.use('/view',require('./views'));
  return router;
})();
