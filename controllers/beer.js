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
  const getBeerByDate = (callback) => {
    models.beer.find({}).sort({'date':-1}).limit(5).exec((err, doc) => callback(err, doc));

    return ;
  }

  const getBeerBySell = (callback)=>{
  //   models.Transaction.aggregate([
  //       {
  //          $unwind: "$beers" },
  //         {
  //           $group: {
  //             _id: {
  //               title: '$beers.beer',
  //             },
  //       count: { $sum: '$beers.amount' }
  //    }
  // },
  //           // Sorting pipeline
  //       { "$sort": { "count": -1 } },
  //       // Optionally limit results
  //       { "$limit": 5 }
  //
  //   ], function (err, result) {
  //       if (err) {
  //           callback(err);
  //       } else {
  //           models.Beer.find({'_id':{$in:result._id}}).exec((err,doc)) => callback(error,docs);
  //       }
  //       return;
  //   });
  }


  const getBeerByStar = (callback)=>{
//     models.Review.aggregate([
//         { $group: {
//             _id: '$beer',
//             starAvg: { $avg: '$star'}
//         }},
//         { "$sort": { "starAvg": -1 } },
//         // Optionally limit results
//         { "$limit": 5 }
//     ], function (err, results) {
//         if (err) {
//             callback(err);
//         } else {
//             models.Beer.find({'_id':{$in:result._id}}).exec((err,doc)) => callback(error,docs);
//         }
//     }
// );
  }


  return {getBeer,getBeerBySell,getBeerByDate,getBeerByStar};
})();
