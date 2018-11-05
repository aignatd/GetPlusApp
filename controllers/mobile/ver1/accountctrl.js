/**
 * Created by ignat on 11-Oct-18.
 */

let fixvalue = require('../../../utils/fixvalue.json');
const mdlAccount = require('../../../models/mobile/ver1/accountmodel');
const reqPromiseNative = require('request-promise-native');
const strParams = 'account/';

/* Controller Login */
let ctrlAccountLogin = async (req, res) =>
{
  var options =
  {
    method  : 'POST',
    uri     : fixvalue.Server.Server_URL + strParams + 'login',
    headers : { authorization: req.headers.authorization, 'content-type': 'application/json; charset=utf-8', host: 'test.mygetplus.id', connection: 'Keep-Alive' },
    json    : true // Automatically stringifies the body to JSON
  };

  console.log('----------------------- Parameter ---------------------');
  console.log(options);
  console.log('------------------------ Header ------------------------');
  console.log(req.headers);
  console.log('------------------------ Body -----------------------');
  console.log(req.body);
  console.log('------------------------ Response -----------------------');

  reqPromiseNative(options)
    .then(function (parsedBody)
    {
      console.log(req);
      console.log(parsedBody);
      res.status('200').json(parsedBody);
/*
      mdlAccount.AccountLogin(req, function (result, err)
      {
        console.log(res);
        console.log(parsedBody);
        res.status('200').json(parsedBody);
      });
*/
    })
    .catch(function (err)
    {
      if (err.toString().indexOf('RequestError') > -1)
      {
        console.log(err.toString());
        res.status('402').send(err.toString());
      }
      else
      {
        console.log('StatusCode -> ' + err.response.statusCode + ' and StatusMessage -> ' + err.response.statusMessage);
        res.status(err.response.statusCode).send(err.response.statusMessage);
      }
    }
  );
};

/* Controller Join */
let ctrlAccountJoin = async (req, res) =>
{
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method  : 'POST',
    uri     : fixvalue.Server.Server_URL + strParams + 'join',
    headers : req.headers,
    body    : req.body,
    json    : true // Automatically stringifies the body to JSON
  };

  console.log('----------------------- Parameter ---------------------');
  console.log(options);
  console.log('------------------------ Header ------------------------');
  console.log(req.headers);
  console.log('------------------------ Body -----------------------');
  console.log(req.body);
  console.log('------------------------ Response -----------------------');

  reqPromiseNative(options)
    .then(function (parsedBody)
    {
      console.log(parsedBody);
      res.status('200').json(parsedBody);
    })
    .catch(function (err) {
      if (err.toString().indexOf('RequestError') > -1) {
        console.log(err.toString());
        res.status('402').send(err.toString());
      }
      else {
        console.log('StatusCode -> ' + err.response.statusCode + ' and StatusMessage -> ' + err.response.statusMessage);
        res.status(err.response.statusCode).send(err.response.statusMessage);
      }
    }
  );
};

/* Controller Forgot Password */
let ctrlForgotPassword = async (req, res) =>
{
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method  : 'POST',
    uri     : fixvalue.Server.Server_URL + strParams + 'forgotten-password',
    headers : req.headers,
    json    : true // Automatically stringifies the body to JSON
  };

  console.log('----------------------- Parameter ---------------------');
  console.log(options);
  console.log('------------------------ Header ------------------------');
  console.log(req.headers);
  console.log('------------------------ Body -----------------------');
  console.log(req.body);
  console.log('------------------------ Response -----------------------');

  reqPromiseNative(options)
    .then(function (parsedBody)
    {
      console.log(parsedBody);
      res.status('200').json(parsedBody);
    })
    .catch(function (err)
    {
      if (err.toString().indexOf('RequestError') > -1)
      {
        console.log(err.toString());
        res.status('402').send(err.toString());
      }
      else
      {
        console.log('StatusCode -> ' + err.response.statusCode + ' and StatusMessage -> ' + err.response.statusMessage);
        res.status(err.response.statusCode).send(err.response.statusMessage);
      }
    }
  );
};

/* Controller Query Account Status */
let ctrlStatus = async (req, res) => {
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method  : 'GET',
    uri     : fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/status',
    headers : req.headers,
    json    : true // Automatically stringifies the body to JSON
  };

  console.log('----------------------- Parameter ---------------------');
  console.log(options);
  console.log('------------------------ Header ------------------------');
  console.log(req.headers);
  console.log('------------------------ Body -----------------------');
  console.log(req.body);
  console.log('------------------------ Response -----------------------');

  reqPromiseNative(options)
    .then(function (parsedBody) {
      console.log(parsedBody);
      res.status('200').json(parsedBody);
    })
    .catch(function (err) {
      if (err.toString().indexOf('RequestError') > -1) {
        console.log(err.toString());
        res.status('402').send(err.toString());
      }
      else {
        console.log('StatusCode -> ' + err.response.statusCode + ' and StatusMessage -> ' + err.response.statusMessage);
        res.status(err.response.statusCode).send(err.response.statusMessage);
      }
    }
    );
};

/* Controller Account Verification Email */
let ctrlVerificationEmail = async (req, res) => {
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method: 'GET',
    uri: fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/verify/resend',
    headers: req.headers,
    json: true // Automatically stringifies the body to JSON
  };

  console.log('----------------------- Parameter ---------------------');
  console.log(options);
  console.log('------------------------ Header ------------------------');
  console.log(req.headers);
  console.log('------------------------ Body -----------------------');
  console.log(req.body);
  console.log('------------------------ Response -----------------------');

  reqPromiseNative(options)
    .then(function (parsedBody) {
      console.log(parsedBody);
      res.status('200').json(parsedBody);
    })
    .catch(function (err) {
      if (err.toString().indexOf('RequestError') > -1) {
        console.log(err.toString());
        res.status('402').send(err.toString());
      }
      else {
        console.log('StatusCode -> ' + err.response.statusCode + ' and StatusMessage -> ' + err.response.statusMessage);
        res.status(err.response.statusCode).send(err.response.statusMessage);
      }
    }
    );
};

/* Controller Account Verification Phone */
let ctrlVerificationPhone = async (req, res) => {
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method  : 'POST',
    uri     : fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/verify/phone',
    headers : req.headers,
    body    : req.body,
    json    : true // Automatically stringifies the body to JSON
  };

  console.log('----------------------- Parameter ---------------------');
  console.log(options);
  console.log('------------------------ Header ------------------------');
  console.log(req.headers);
  console.log('------------------------ Body -----------------------');
  console.log(req.body);
  console.log('------------------------ Response -----------------------');

  reqPromiseNative(options)
    .then(function (parsedBody) {
      console.log(parsedBody);
      res.status('200').json(parsedBody);
    })
    .catch(function (err) {
      if (err.toString().indexOf('RequestError') > -1) {
        console.log(err.toString());
        res.status('402').send(err.toString());
      }
      else {
        console.log('StatusCode -> ' + err.response.statusCode + ' and StatusMessage -> ' + err.response.statusMessage);
        res.status(err.response.statusCode).send(err.response.statusMessage);
      }
    }
  );
};

/* Controller Account Verification Phone */
let ctrlPendingAccountLogin = async (req, res) => {
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method: 'POST',
    uri: fixvalue.Server.Server_URL + strParams + req.params.ResourceID,
    headers: req.headers,
    body: req.body,
    json: true // Automatically stringifies the body to JSON
  };

  console.log('----------------------- Parameter ---------------------');
  console.log(options);
  console.log('------------------------ Header ------------------------');
  console.log(req.headers);
  console.log('------------------------ Body -----------------------');
  console.log(req.body);
  console.log('------------------------ Response -----------------------');

  reqPromiseNative(options)
    .then(function (parsedBody) {
      console.log(parsedBody);
      res.status('200').json(parsedBody);
    })
    .catch(function (err) {
      if (err.toString().indexOf('RequestError') > -1) {
        console.log(err.toString());
        res.status('402').send(err.toString());
      }
      else {
        console.log('StatusCode -> ' + err.response.statusCode + ' and StatusMessage -> ' + err.response.statusMessage);
        res.status(err.response.statusCode).send(err.response.statusMessage);
      }
    }
    );
};

module.exports = { postAccountLogin: ctrlAccountLogin, postAccountJoin: ctrlAccountJoin, postForgotPassword: ctrlForgotPassword,
  postStatus: ctrlStatus, postVerificationEmail: ctrlVerificationEmail, postVerificationPhone: ctrlVerificationPhone,
  postPendingAccountLogin: ctrlPendingAccountLogin
};
