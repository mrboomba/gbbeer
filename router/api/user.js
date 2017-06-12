module.exports = (() => {
  const express = require('express');
  const path = require('path');
  const router = express.Router();
  const logger = require(path.resolve(__dirname, '../../config/logger'));
  const ModelControllers = require(path.resolve(__dirname, '../../controllers'));
  // middleware to use for all requests



  router.route('/register').post((req, res) => {
console.log(req.body);
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
          res.status(400).send(err);
          return;
        }
        return;
      });
  });




  return router;
})();
