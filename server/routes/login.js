var express = require('express');
var router = express.Router();
var db = require('../config/db');
let bcrypt = require('bcrypt-nodejs');

/* GET home page. */
router.get('/', function (req, res) {
  return res.render('login', { title: '로그인' });
});

/* 로그인 기능 */
router.post('/', (req, res) => {
  let { username, password } = req.body;
  // db에서 사용자가 입력한 아이디를 조회한다.
  db.mysql.query('SELECT * FROM users WHERE username=?', username, (err, result) => {
    // 만약 사용자 정보가 입력한 아이디가 존재하지 않은 경우 에러페이지를 보여준다.
    if (err || !result[0]) {
      // return res.render('error', { message: "존재하지 않는 아이디 입니다." })
      req.session.is_logined=false;
      return res.end('0');
    }
    /* bcrypt.comrare라는 함수를 사용해 사용자가 입력한 비밀번호와 db에 암호화 되어있는 비밀번호를 비교해서 참이면 로그인
       아니면 에러페이지에 message를 가지고 가서 띄어준다. */
    bcrypt.compare(password, result[0].password, (err, tf) => {
      if (tf === false) {
        // return res.render('error', { message: "아이디 또는 비밀번호를 확인해주세요." })
        req.session.is_logined=false;
        return res.end('0');
      } else {
        /* 로그인 성공시 session에 is_logined라는 변수에 true값을 저장한다.
           true 값을 저장하는 이유는 만약 로그인 상태가 아닐경우 로그인 페이지로 이동되게하게끔 하기위해 만든 변수다. */
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

// /* /logout으로 post요청이 오면 로그인 상태를 해제한다.  */
// router.post('/logout', (req, res, next) => {
//   req.session.destroy((err) => {
//     return res.redirect('/')
//   })
// })

module.exports = router;
