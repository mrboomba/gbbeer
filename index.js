
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
        logger.log('Connect to Database at port 27017');
        require('./app');
      }).catch(function(error){
        console.log(error);
      })
  }
})
