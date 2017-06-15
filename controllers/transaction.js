module.exports = (() => {
  const path = require("path");
  const models = require(path.resolve(__dirname, '../models'));
  const userController = require('./user');
  const beerController = require('./beer');
  const reviewController = require('./review');
  const async = require('async');
  const MULTIPLE_DOC_ERR = new Error('Got Multiple document(should be one)');

  const getTransaction = (searchObj, callback) => {
    if (searchObj.user) {
      models.Transaction.findOne({user : searchObj.user_id}).exec((err, doc) => callback(err, doc));
      return;
    } else {
      models.Transaction.find(searchObj).exec((err, doc) => callback(err, doc));
      return;
    }
  }

  const createTransaction = (createObject, callback) => {
    models.transaction.create(createObject,function(err,doc){
      callback(err,doc);
    });
    return ;
  }
  function compare(a,b) {
  if (a.qty < b.qty)
    return 1;
  if (a.qty > b.qty)
    return -1;
  return 0;
}
function compare2(a,b) {
if (a.amount < b.amount)
  return 1;
if (a.amount > b.amount)
  return -1;
return 0;
}
  const getRecomend = (bill,callback) => {
    bill.sort(compare);
      models.transaction.find({'beers.beer':bill[0].item._id},function(err,doc){
        if(doc){
        var tmp = doc.map(function(a){
          return a.beers;
        });
        var merged = [].concat.apply([], tmp);

        var beer = {}
        var amount = {}
        var newArraySeries = []
          merged.forEach(function(e){
            if(!beer[e.beer]){
              beer[e.beer] = e.beer;
              amount[e.beer] = 0;
            }
        amount[e.beer]+=e.amount;
      })
      if(beer[bill[0].item._id])
      {
        delete beer[bill[0].item._id];
      }
       for(var b in beer){
          newArraySeries.push({'beer' : b, 'amount' : amount[b]})
       }
       if(newArraySeries.length<3){
         beerController.getBeerByDate(function(err,docs) {
           var ssss = docs.slice(0,3);
          return  callback(err,ssss);

       })
     }else{
        var output = newArraySeries.sort(compare2).slice(0,3);
        var boom = output.map(function(a){
          return a.beer;
        })

        models.beer.find({'_id':{$in:boom}}).exec((err, doc) => callback(err, doc));
        return;
      }
        }
        else{
          beerController.getBeerByDate(function(err,doc) {
            var output = doc.slice(0,3);
            callback(output);
            return;
          })
        }
      })



  }



  return {getTransaction,createTransaction,getRecomend};
})();
