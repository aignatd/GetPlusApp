'use strict';
const express = require('express');
const router = express.Router();

var accountctrl = require('../../../controllers/mobile/ver1/accountctrl');

router.get('/', async (req, res) => {
  res.status('200').send('Don\'t do that again');
});

router.post('/', async (req, res) =>
{
  res.status('200').send('Don\'t do that again');
});

/* POST account login */
router.post('/login', accountctrl.postAccountLogin);

/* POST account join */
router.post('/join', accountctrl.postAccountJoin);

/* POST account forgot password */
router.post('/forgotten-password', accountctrl.postForgotPassword);

/* GET query account status */
router.post('/:ResourceID/status', accountctrl.postStatus);

/* GET resend account verification email */
router.post('/:ResourceID/verify/resend', accountctrl.postVerificationEmail);

/* POST verify account phone number */
router.post('/:ResourceID/verify/phone', accountctrl.postVerificationPhone);

/* POST update pending account login */
router.post('/:ResourceID', accountctrl.postPendingAccountLogin);

module.exports = router;