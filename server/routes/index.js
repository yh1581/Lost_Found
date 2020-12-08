var express = require('express');
const { render } = require('../app');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.end('Main Page');
});

module.exports = router;