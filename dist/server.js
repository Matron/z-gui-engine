const express = require('express');
const logger = require('morgan');
const util = require('util');

//create server
const app = express();

//middleware
app.use(logger('dev'));

//static files
app.use(express.static('./dist/public'));

//run server
const port = process.env.PORT || 3000;
app.listen(port);
util.log('Server running on ' + port);
