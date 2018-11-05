'use strict';
const express = require('express');
const router = express.Router();
const reqPromiseNative = require('request-promise-native');
const base64js = require('base64-js');
const libbase64 = require('libbase64');

var membersctrl = require('../../../controllers/mobile/ver1/Membersctrl');

router.get('/', async (req, res) => {
  res.status('200').send('Don\'t do that again');
});

router.post('/', async (req, res) =>
{
  res.status('200').send('Don\'t do that again');
});

/* GET members orders */
router.get('/:ResourceID/orders', membersctrl.getOrders);

/* GET members featered offers */
router.get('/:ResourceID/featered-offers', membersctrl.getFeateredOffers);

/* GET members offer */
router.get('/:ResourceID/offers', membersctrl.getMemberOffer);

/* GET members offer */
router.get('/:ResourceID/offers/:RSN', membersctrl.getMemberRSN);

/* GET members vouchers */
router.get('/:ResourceID/vouchers', membersctrl.getMemberVouchers);

/* GET members transactions */
router.get('/:ResourceID/transactions', membersctrl.getMemberTransaction);

/* GET members profile dashboard */
router.get('/:ResourceID', membersctrl.getProfileDashboard);

/* POST members profile update */
router.post('/:ResourceID', membersctrl.postProfileUpdate);

/* POST members change password */
router.post('/:ResourceID/change-password', membersctrl.postChangePassword);

/* POST members redirection */
router.post('/:ResourceID/rd/:RDCode/:RDResourceID', membersctrl.postRedirection);

/* GET members preferences */
router.get('/:ResourceID/preferences', membersctrl.getPreferences);

/* POST members preferences */
router.post('/:ResourceID/preferences', membersctrl.postPreferences);

/* GET members referral code */
router.get('/:ResourceID/referralcode ', membersctrl.getReferralCode);

/* POST members integration */
router.post('/:ResourceID/rd/wellness-assessment', membersctrl.postMembersIntegration);

module.exports = router;