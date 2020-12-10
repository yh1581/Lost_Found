var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    req.session.destroy((err) => {
        return res.end();
    })
})

module.exports = router;