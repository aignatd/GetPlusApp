'use strict';
const express = require('express');
const router = express.Router();

var partnerctrl = require('../../../controllers/mobile/ver1/partnerctrl');

router.get('/', async (req, res) => {
  res.status('200').send('Don\'t do that again');
});

router.post('/', async (req, res) =>
{
  res.status('200').send('Don\'t do that again');
});

/* GET partner */
router.get('/:PartnerRSN', partnerctrl.getPartnerRSN);

module.exports = router;