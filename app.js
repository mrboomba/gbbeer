const path = require('path');
const express    = require('express');        // call express
const app        = express();                 // define our app using express
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const logger = require('./config/logger');
const http = require('http');





// app.use(session({
//     secret: CONSTANT.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true
// }));

// app.use(express.static(path.resolve(__dirname,'./public')));
// app.use(express.static(path.resolve(__dirname,'../bower_components')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use(bodyParser.json());
const port = process.env.PORT || 3000;        // set our port

app.use('/', require('./router'));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'img')));

const server = http.createServer(app);
server.listen(port,function(err){
  if(err)
  logger.log('error',err);
  else
  logger.log('info','Magic happens on port ' + port);
});
