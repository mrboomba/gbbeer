var Promise = require('es6-promise').Promise;
var beerModels = require('../models/beer');

function createDB() {

    return new Promise(function(resolve, reject) {
        var beerJson = JSON.parse(require('fs').readFileSync(__dirname + '/testcase/beer.json', 'utf8'));
        beerModels.remove({},function(error){
          if (error) reject(error);
              beerModels.create(beerJson, function(error){
                if (error) reject(error);
                  resolve();
            });
        });
    });
}

module.exports.createDB = createDB;
