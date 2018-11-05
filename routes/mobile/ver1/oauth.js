'use strict';
const express = require('express');
const router = express.Router();

var oauthctrl = require('../../../controllers/mobile/ver1/oauthctrl');

router.get('/', async (req, res) => {
  res.status('200').send('Don\'t do that again');
});

router.post('/', async (req, res) =>
{
  res.status('200').send('Don\'t do that again');
});

/* POST token */
router.post('/token', oauthctrl.postToken);

/* POST token refresh */
router.post('/refresh-token', oauthctrl.postTokenRefresh);

module.exports = router;