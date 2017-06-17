module.exports = (() => {
  const path = require("path");
  const models = require(path.resolve(__dirname, '../models/'));
  const userController = require('./user');
  const async = require('async');
  const MULTIPLE_DOC_ERR = new Error('Got Multiple document(should be one)');

  const getBeer = (searchObj, callback) => {
    if (searchObj._id) {
      models.beer.findOne({_id : searchObj._id}).exec((err, doc) => callback(err, doc));
      return;
    } else {
      models.beer.find(searchObj).exec((err, doc) => callback(err, doc));
      return;
    }
  }

  const createBeer = (createObj, callback) => {
    models.beer.create(createObj).exec((err) => callback(err));
    return;
  }

  const getBeerByDate = (callback) => {
    models.beer.find({}).sort({'date':-1}).limit(4).exec((err, doc) => callback(err, doc));
    return;
  }
  const getBeerBySell = (callback)=>{
    models.transaction.aggregate([
        {
           $unwind: "$beers" },
          {
            $group: {
              _id:'$beers.beer',
        count: { $sum: '$beers.amount' }
     }
  },
        // Sorting pipeline
        { "$sort": { "count": -1 } },
        // Optionally limit results
        { "$limit": 4 }

    ], function (err, result) {
        if (err) {
            callback(err);
        } else {
          var tmp = result.map(function(a){
            return a._id;
          })
            models.beer.find({'_id':{$in:tmp}}).exec((err, doc) => callback(err, doc));
        }
        return;
    });
  }

  const getBeerByStar = (callback)=>{
    models.review.aggregate([
        { $group: {
            _id: '$beer',
            starAvg: { $avg: '$star'}
        }},
        { "$sort": { "starAvg": -1 } },
        // Optionally limit results
        { "$limit": 4 }
    ], function (err, results) {
        if (err) {
            callback(err);
        } else {

          var tmp = results.map(function(a){
            return a._id;
          })
          var tmp2 = results.map(function(a){
            return a.starAvg;
          })

          models.beer.find({'_id':{$in:tmp}}).exec((err, doc) => {

            tmp2.forEach(function (value, i) {
                doc[i].rate = value;
              });
              callback(err,doc);
          });
        }
    }
);
  }


  return {getBeer,getBeerBySell,getBeerByDate,getBeerByStar};
})();
