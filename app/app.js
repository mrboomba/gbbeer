const path = require('path');
const express    = require('express');        // call express
const app        = express();                 // define our app using express
const session = require('express-session');
const bodyParser = require('body-parser');
const CONFIG = require('../config/config');


// app.use(session({
//     secret: CONSTANT.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true
// }));

// app.use(express.static(path.resolve(__dirname,'./public')));
// app.use(express.static(path.resolve(__dirname,'../bower_components')));

app.use(bodyParser.json());
const port = process.env.PORT || 3000;        // set our port

app.use('/', require('./routers'));

app.listen(port);
