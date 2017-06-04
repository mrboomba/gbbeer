const path = require('path');
const express    = require('express');        // call express
const app        = express();                 // define our app using express
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('../config/logger');
const http = require('http');





// app.use(session({
//     secret: CONSTANT.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true
// }));

// app.use(express.static(path.resolve(__dirname,'./public')));
// app.use(express.static(path.resolve(__dirname,'../bower_components')));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
const port = process.env.PORT || 3000;        // set our port

app.use('/', require('./router'));
const server = http.createServer(app);
server.listen(port,function(err){
  if(err)
  logger.log('error',err);
  else
  logger.log('info','Magic happens on port ' + port);
});
