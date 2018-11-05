/**
 * Created by ignat on 11-Oct-18.
 */

let fixvalue = require('../../../utils/fixvalue.json');
const reqPromiseNative = require('request-promise-native');
const strParams = 'members/';

/* Controller Member Orders */
let ctrlOrders = async (req, res) =>
{
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method  : 'GET',
    uri     : fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/orders',
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

/* Controller Member Featered Offers */
let ctrlFeateredOffers = async (req, res) =>
{
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method  : 'GET',
    uri     : fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/featered-offers',
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

/* Controller Member Offer */
let ctrlMemberOffer = async (req, res) =>
{
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method  : 'GET',
    uri     : fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/offers',
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

/* Controller Member RSN */
let ctrlMemberRSN = async (req, res) => {
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method: 'GET',
    uri: fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/offers/' + req.params.RSN,
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

/* Controller Member Vouchers */
let ctrlMemberVouchers = async (req, res) =>
{
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method  : 'GET',
    uri     : fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/vouchers',
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

/* Controller Member Transaction */
let ctrlMemberTransaction = async (req, res) =>
{
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method  : 'GET',
    uri     : fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/transactions',
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

/* Controller Profile Dashboard */
let ctrlProfileDashboard = async (req, res) =>
{
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method  : 'GET',
    uri     : fixvalue.Server.Server_URL + strParams + req.params.ResourceID,
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

/* Controller Profile Update */
let ctrlProfileUpdate = async (req, res) =>
{
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method  : 'POST',
    uri     : fixvalue.Server.Server_URL + strParams + req.params.ResourceID,
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
      console.log(req.originalUrl);
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

/* Controller Change Password */
let ctrlChangePassword = async (req, res) =>
{
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method  : 'POST',
    uri     : fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/change-password',
    headers : req.headers,
    json     : true // Automatically stringifies the body to JSON
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

/* Controller Member Redirection */
let ctrlRedirection = async (req, res) => {
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method: 'POST',
    uri: fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/rd/' + req.params.RDCode + '/' + req.params.RDResourceID,
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

/* Controller Member Redirection */
let ctrlgetPreferences = async (req, res) => {
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method: 'GET',
    uri: fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/preferences',
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

/* Controller Member Redirection */
let ctrlpostPreferences = async (req, res) => {
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method: 'POST',
    uri: fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/preferences',
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

/* Controller Member Referral Code */
let ctrlReferralCode = async (req, res) => {
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method: 'GET',
    uri: fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/referralcode',
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

/* Controller Member Redirection */
let ctrlMembersIntegration = async (req, res) => {
  req.headers.host = fixvalue.Server.Server_Host;

  var options =
  {
    method: 'POST',
    uri: fixvalue.Server.Server_URL + strParams + req.params.ResourceID + '/rd/wellness-assessment',
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

module.exports = {
  getOrders: ctrlOrders, getFeateredOffers: ctrlFeateredOffers, getMemberOffer: ctrlMemberOffer, getMemberVouchers: ctrlMemberVouchers,
  getMemberTransaction: ctrlMemberTransaction, getProfileDashboard: ctrlProfileDashboard, postProfileUpdate: ctrlProfileUpdate,
  postChangePassword: ctrlChangePassword, getMemberRSN: ctrlMemberRSN, postRedirection: ctrlRedirection, getPreferences: ctrlgetPreferences,
  postPreferences: ctrlpostPreferences, getReferralCode: ctrlReferralCode, postMembersIntegration: ctrlMembersIntegration
};
