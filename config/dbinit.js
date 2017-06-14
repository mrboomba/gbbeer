var Promise = require('es6-promise').Promise;
var beerModels = require('../models/beer');
var userModels = require('../models/user');
var reviewModels = require('../models/review');

function createDB() {

    return new Promise(function(resolve, reject) {
        var beerJson = JSON.parse(require('fs').readFileSync(__dirname + '/testcase/beer.json', 'utf8'));
        var userJson = JSON.parse(require('fs').readFileSync(__dirname + '/testcase/user.json', 'utf8'));

        beerModels.remove({},function(error){
          userModels.remove({},function(error){
              reviewModels.remove({},function(error){
                if (error) reject(error);
                beerModels.create(beerJson, function(error){

                  userModels.create(userJson, function (error) {
                    if (error) reject(error);
                    resolve();
                    })
                  });
                });
            });
        });
    });
}

module.exports.createDB = createDB;
