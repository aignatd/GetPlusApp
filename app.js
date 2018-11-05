'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// Start, add by Ignat 23082018
var fixvalue = require('./utils/fixvalue.json');
const tdExp = require('express4-tedious');
const sqlInjectReject = require('sql-inject-reject');
var sql = require('mssql');

var oauth = require('./routes/mobile/ver1/oauth');
var member = require('./routes/mobile/ver1/members');
var account = require('./routes/mobile/ver1/account');
var partner = require('./routes/mobile/ver1/partners');
var application = require('./routes/mobile/ver1/application');
var publics = require('./routes/mobile/ver1/public');
var testing = require('./routes/mobile/ver1/testing');

var Connection = require('tedious').Connection;
var Request = require('tedious').Request;

var MSSLQOptions =
{
  userName: 'sa',
  password: 'zita04072010',
  server: 'COBALT',
  port: 1433,
  dialect: "mssql",
  driver: 'tedious',
  options:
  {
    connectionTimeout: 3000,
    database: 'GetPlus',
    instanceName: "MSSQLSVR",
    encrypt: false // Use this if you're on Windows Azure
  }
};

var connection = new Connection(MSSLQOptions);

// Attempt to connect and execute queries if connection goes through
connection.on('connect', function (err) {
  if (err) {
    console.log(err)
  }
  else {
    console.log('Masuk');
  }
});

/*
var dbConfig =
{
  user     : 'sa',
  password : 'zita04072010',
  server   : 'COBALT\\MSSQLSVR',
  database : 'GetPlus',
  connectionTimeout : 3000,
  options:
  {
    "encrypt": false
  }
};

var dbConfig =
{
  "user": 'sa',
  "password": 'zita04072010',
  "server": 'COBALT',
  "database": 'GetPlus',
  "port": 1433,
  "dialect": "mssql",
  "driver": 'tedious',
  options:
  {
    "instanceName": "MSSQLSVR",
    encrypt: false // Use this if you're on Windows Azure
  }
};

sql.connect(dbConfig, err => {
  if (err)
    console.log(err.message);
  else
    console.log('Connected');
});

sql.on('error', err => {
  if (err)
    console.log(err.message);
  else
    console.log('Connected');
});
*/
/*
pool.connect(err =>
{
  console.log(err.message);
});
*/

/*
console.log('Belum masuk 1 !!!');

app.use(function (req, res, next) {
  console.log('Belum masuk 2 !!!');
  req.sql = tdExp(req, MSSLQOptions);
  console.log('Masuk !!!');
  next();
});
*/

/*
app.use(sqlInjectReject({ keywords: ['UNION', 'SELECT', 'DELETE'] }));
app.use(sqlInjectReject());
*/
// End, add by Ignat 23082018

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// Start, add by Ignat 23082018
app.use('/users', users);
app.use(fixvalue.RouterApiV1.oauth, oauth);
app.use(fixvalue.RouterApiV1.member, member);
app.use(fixvalue.RouterApiV1.account, account);
app.use(fixvalue.RouterApiV1.partner, partner);
app.use(fixvalue.RouterApiV1.application, application);
app.use(fixvalue.RouterApiV1.public, publics);
app.use(fixvalue.RouterApiV1.testing, testing);
// End, add by Ignat 23082018

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || fixvalue.Server.Port);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});

