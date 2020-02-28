var express = require('express');
var router = express.Router();
var destinationCtrl = require('../controllers/destinations');

router.post('/', destinationCtrl.create);

module.exports = router;