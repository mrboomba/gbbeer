
const path = require('path');
const models = require(path.resolve(__dirname, './models'));
const logger = require(path.resolve(__dirname, './config/logger'));
const DB = require(path.resolve(__dirname,'./config/dbconfig'));
const DBinit = require(path.resolve(__dirname,'./config/dbinit'))
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(DB.url,function(err){
  if(err)
    logger.log(error,err)
  else
    {
      DBinit.createDB().then(function(message){
        logger.log('info','Connect to Database at port 27017');
        require('./app');
        logger.log('info',"It's a Drink Time!");
      }).catch(function(error){
        log,logger('error',error);
      })
  }
})
