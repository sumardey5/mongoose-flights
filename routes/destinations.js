var express = require('express');
var router = express.Router();
var destinationCtrl = require('../controllers/destinations');

router.post('/:id/', destinationCtrl.create);
//why is it /flights/:id?
//":" is a parameter!!!

module.exports = router;