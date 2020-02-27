var express = require('express');
var router = express.Router();
var flightCtrl = require('../controllers/flights'); //u r here 2

/* GET users listing. */
router.get('/', flightCtrl.index);
router.get('/new', flightCtrl.new);
router.post('/', flightCtrl.create);

module.exports = router;
