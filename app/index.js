
const path = require('path');

const logger = require(path.resolve(__dirname, '../config/logger'));

const models = require(path.resolve(__dirname, './models'));
require(path.resolve(__dirname, './models/dbinit')).then(() => {

  logger.log('info', 'Connected to Database');

  require('./app');
}, err => {

  logger.log('error', 'error occur');
  logger.log('error', err);
  process.kill(process.pid, 'SIGUSR2');
  reject(err);
});
