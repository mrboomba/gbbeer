module.exports = (() => {
  const path = require("path");
  const models = require(path.resolve(__dirname, '../models'));
  const userController = require('./user');
  const async = require('async');
  const MULTIPLE_DOC_ERR = new Error('Got Multiple document(should be one)');

  const getReview = (searchObj, callback) => {
    if (searchObj.user) {
      models.review.find({user : searchObj.user}).exec((err, doc) => callback(err, doc));
      return;
    }
    else if (searchObj.beer) {
      models.review.find({beer : searchObj.beer}).exec((err, doc) => callback(err, doc));
      return;
    } else {
      models.review.find(searchObj).exec((err, doc) => callback(err, doc));
      return;
    }
  }

  const createReview = (createObj, callback) => {
      models.review.create(createObj,function(err,doc){
        if(err){
          callback(err);
          return;
        }
        else{
          callback(err,doc);
        }
      });
      return ;
  }

  const getReviewByBeerId = (searchObj, callback) => {
    getReview({beer:searchObj.beer},(err,doc) => {
        var tmp = doc.map(function(a){
          return a.user;
        })
        models.user.find({'_id':{$in:tmp}}).exec((err, docs) => {
          var output = [];
          var tmp2 ={};
          docs.forEach(function (value, i) {
              tmp2["name"] = value.firstname+" "+value.lastname;
              tmp2["date"] = doc[i].date;
              tmp2["comment"] = doc[i].comment;
              output.push(tmp2);
              console.log(output);
          });
          console.log(output);
          callback(err,output);
        });
      });
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



  return {getReview ,getReviewByBeerId,getStarByBeerId,createReview};
})();
