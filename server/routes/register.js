var express = require('express');
var router = express.Router();
var db = require('../config/db')
let bcrypt = require('bcrypt-nodejs');

router.get('/', function (req, res) {
    return res.render('register', { title: '회원가입' });
    // return res.end();
});

router.post('/', (req, res, next) => {
    let { username, email, student_id, password } = req.body;
    password = bcrypt.hashSync(password)
    let sql = { username, email, student_id, password };
    db.mysql.query('INSERT INTO users set ?', sql, (err) => {
        if (err) {
            console.log(err)
            // return res.render('error', { message: "이미 존재하는 이이디 입니다" })
            return res.end('0');
        }
        else {
            // return res.redirect('/')
            return res.end('1');
        }
    })
})

module.exports = router;
