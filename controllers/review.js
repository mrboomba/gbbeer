module.exports = (() => {
  const path = require("path");
  const models = require(path.resolve(__dirname, '../models'));
  const userController = require('./user');
  const async = require('async');
  const MULTIPLE_DOC_ERR = new Error('Got Multiple document(should be one)');

  const getReview = (searchObj, callback) => {
    if (searchObj.user) {
      models.Review.find({user : searchObj.user}).exec((err, doc) => callback(err, doc));
      return;
    }
    else if (searchObj.beer) {
      models.Review.find({beer : searchObj.beer}).exec((err, doc) => callback(err, doc));
      return;
    } else {
      models.Review.find(searchObj).exec((err, doc) => callback(err, doc));
      return;
    }
  }

  const getReviewByBeerId = (searchObj, callback) => {
    getReview({beer:searchObj.beer},(err,doc) => callback(err,doc));
  }

  const getStarByBeerId = (searchObj, callback) => {
    models.Review.aggregate([
        { $group: {
            _id: '$beer',
            starAvg: { $avg: '$star'}
        }},
    ], function (err, results) {
        if (err) {
            callback(err);
        } else {
            results.find({_id:searchObj.beer},function(err,docs){callback(err,docs)})
        }
        return ;
    }
);
  }



  return {getReview ,getReviewByBeerId,getStarByBeerId};
})();
