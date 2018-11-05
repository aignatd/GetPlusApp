'use strict';
const express = require('express');
const router = express.Router();

var appctrl = require('../../../controllers/mobile/ver1/appctrl');

router.get('/', async (req, res) => {
  res.status('200').send('Don\'t do that again');
});

router.post('/', async (req, res) =>
{
  res.status('200').send('Don\'t do that again');
});

/* GET application setting */
router.get('/settings', appctrl.getAppSetting);

module.exports = router;