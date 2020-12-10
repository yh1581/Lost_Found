var express = require('express');
var router = express.Router();
// db를 사용
var db = require('../config/db')
let bcrypt = require('bcrypt-nodejs');

// get요청시 페이지를 렌더하는데 title에 '회원가입'이라는 변수를 가지고 간다.
router.get('/', function (req, res) {
    return res.render('register', { title: '회원가입' });
    // return res.end();
});

// post요청시 회원가입을 하는 기능을 수행한다.
router.post('/', (req, res, next) => {
    // 사용자가 웹 페이지에서 입력한 id, pw를 id, pw 라는 변수로 저장한다.
    let { username, email, student_id, password } = req.body;
    // 비밀번호를 암호화 한다.(bcrypt에서 지원하는 hashSync라는 함수로 암호화)
    password = bcrypt.hashSync(password)
    // db에 저장하는 기능
    let sql = { username, email, student_id, password };
    db.mysql.query('INSERT INTO users set ?', sql, (err) => {
        // err에서는 입력한 아이디가 이미 db상에서 존재하는 경우에 발생한다.
        if (err) {
            console.log(err)
            // return res.render('error', { message: "이미 존재하는 이이디 입니다" })
            return res.end('0');
        }
        else {
        // 아이디가 db에 저장되어 있지 않는 경우라면 회원가입을 완료한뒤에 로그인페이지로 이동한다.
            // return res.redirect('/')
            return res.end('1');
        }
    })
})

module.exports = router;
