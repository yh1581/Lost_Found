var express = require('express');
var router = express.Router();
var db = require('../config/db');
let bcrypt = require('bcrypt-nodejs');

/* GET home page. */
router.get('/', function (req, res) {
  return res.render('login', { title: '로그인' });
});

router.post('/', (req, res) => {
  let { username, password } = req.body;
  db.mysql.query('SELECT * FROM users WHERE username=?', username, (err, result) => {
    if (err || !result[0]) {
      // return res.render('error', { message: "존재하지 않는 아이디 입니다." })
      req.session.is_logined=false;
      return res.end('0');
    }
    bcrypt.compare(password, result[0].password, (err, tf) => {
      if (tf === false) {
        // return res.render('error', { message: "아이디 또는 비밀번호를 확인해주세요." })
        req.session.is_logined=false;
        return res.end('0');
      } else {
        // return res.redirect('/main')
        req.session.is_logined=true;
        req.session.username=result[0].username;
        req.session.student_id=result[0].student_id;
        req.session.email=result[0].email;
        return res.end('1');
      }
    })
  })
})

// router.post('/logout', (req, res, next) => {
//   req.session.destroy((err) => {
//     return res.redirect('/')
//   })
// })

module.exports = router;
