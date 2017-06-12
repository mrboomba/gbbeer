module.exports = (() => {
  const express = require('express');
  const path = require('path');
  const router = express.Router();
  const logger = require(path.resolve(__dirname, '../../config/logger'));
  const ModelControllers = require(path.resolve(__dirname, '../../controllers'));
  // middleware to use for all requests



  router.route('/register').get((req, res) => {
    let newUser = {
      username: req.body.username,
      password: req.body.password,
      name: req.body.name,
      birthday:req.body.birthday,
      address:req.body.address
    }

    ModelControllers.user.createUser(newUser, (err, doc) => {
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
