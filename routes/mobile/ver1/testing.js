'use strict';
const express = require('express');
const router = express.Router();

var testingctrl = require('../../../controllers/mobile/ver1/testingctrl');

router.get('/', async (req, res) => {
  res.status('200').send('Don\'t do that again');
});

router.post('/', async (req, res) =>
{
  res.status('200').send('Don\'t do that again');
});

/* GET API just for testing */
router.get('/testing1', testingctrl.getTesting1);

module.exports = router;