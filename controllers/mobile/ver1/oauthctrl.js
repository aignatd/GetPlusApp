/**
 * Created by ignat on 11-Oct-18.
 */

let fixvalue = require('../../../utils/fixvalue.json');
const reqPromiseNative = require('request-promise-native');
const strParams = 'oauth/';

/* Controller Token */
let ctrlToken = async (req, res) =>
{
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method: 'POST',
    uri: fixvalue.Server.Server_URL + strParams + 'token',
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

/* Controller Token */
let ctrlTokenRefresh = async (req, res) => {
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method: 'POST',
    uri: fixvalue.Server.Server_URL + strParams + 'refresh-token',
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

module.exports = { postToken: ctrlToken, postTokenRefresh: ctrlTokenRefresh};
