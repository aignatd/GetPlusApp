'use strict';
const express = require('express');
const router = express.Router();

var publicctrl = require('../../../controllers/mobile/ver1/publicctrl');

router.get('/', async (req, res) => {
  res.status('200').send('Don\'t do that again');
});

router.post('/', async (req, res) =>
{
  res.status('200').send('Don\'t do that again');
});

/* GET public redirection */
router.get('/:RDCode', publicctrl.getPublicRedirection);

module.exports = router;