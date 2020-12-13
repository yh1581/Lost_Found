var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
   console.log(req.session);
   return res.end(`${req.session.is_logined}`);
  // if (req.session.is_logined === true) {
  //   // return res.redirect('/')
  //   return res.end('1');
  // }
  // else return res.end('0');
  // return res.render('main', { title: "메인페이지" });
});

module.exports = router;
