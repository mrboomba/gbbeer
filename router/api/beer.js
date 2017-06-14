module.exports = (() => {
  const express = require('express');
  const path = require('path');
  const router = express.Router();
  const logger = require(path.resolve(__dirname, '../../config/logger'));
  const ModelControllers = require(path.resolve(__dirname, '../../controllers'));
  // middleware to use for all requests



  router.route('/beer/all?').get((req, res) => {
    ModelControllers.beer.getBeer({}, (err, doc) => {
        if (err) {
          res.status(400).send(err);
          return;
        }
        res.json(doc);
        return;
      });
  });

  router.route('/beer/bestsell?').get((req, res) => {
    ModelControllers.beer.getBeerBySell((err, doc) => {
        if (err) {
          res.status(400).send(err);
          return;
        }
        res.json(doc);
        return;
      });
  });

  router.route('/beer/popular?').get((req, res) => {
    ModelControllers.beer.getBeerByStar((err, doc) => {
        if (err) {
          res.status(400).send(err);
          return;
        }
        res.json(doc);
        return;
      });
  });

  router.route('/beer/newcoming?').get((req, res) => {
    ModelControllers.beer.getBeerByDate((err, doc) => {
      if (err) {
        res.status(400).send(err);
        return;
      }
      res.json(doc);
      return;
    });
  });


  return router;
})();
