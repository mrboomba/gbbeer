
const path = require('path');

const logger = require(path.resolve(__dirname, './config/logger'));
const DB = require(path.resolve(__dirname,'./config/dbconfig'))
const mongoose = require('mongoose');
mongoose.connect(DB.url,function(err){
  if(err)
    logger.log(err)
  else
    {
      logger.log('Connect to Database at port 27017');
      require('./app');
  }
})
