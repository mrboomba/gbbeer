module.exports = (() => {
<<<<<<< HEAD
    const express = require('express');
    const path = require('path');
    const router = express.Router();
    const logger = require(path.resolve(__dirname, '../../config/logger'));
    const ModelControllers = require(path.resolve(__dirname, '../../controllers'));
    // middleware to use for all requests



    router.route('/register').post((req, res) => {
        let newUser = {
            username: req.body.username,
            password: req.body.password,
            name: req.body.name,
            // birthday:req.body.birthday,
            address: req.body.address
        }
=======
  const express = require('express');
  const path = require('path');
  const router = express.Router();
  const logger = require(path.resolve(__dirname, '../../config/logger'));
  const ModelControllers = require(path.resolve(__dirname, '../../controllers'));
  // middleware to use for all requests



  router.route('/register').post((req, res) => {
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
>>>>>>> 6209a84ec1594a970fd13da99b31dc7eaf47497b

        console.log(newUser)
        res.json(newUser);
        /* ModelControllers.user.createUser(newUser, (err, doc) => {
             if (err) {
               res.status(400).send(err);
               return;
             }
             res.json(doc);
             return;
           });*/
    });




    return router;
})();
