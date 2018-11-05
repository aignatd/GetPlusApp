/**
 * Created by ignat on 11-Oct-18.
 */

let fixvalue = require('../../../utils/fixvalue.json');
const mdlAccount = require('../../../models/mobile/ver1/accountmodel');
const reqPromiseNative = require('request-promise-native');

/* GET application settings */
let ctrlTesting1 = async (req, res) =>
{
  console.log(req.sql);
  res.status('200').send('Sukses');
};

module.exports = {
  getTesting1: ctrlTesting1
};
