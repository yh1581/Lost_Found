const express = require('express');
const mysql = require('mysql');
const app = express();

app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    port:  3306 ,
    password: "1234",
    database: "lost_found"
});

db.connect((error)=> {
    if(error){
        console.log("DB 연동 실패 : ", error)
    }
    else {
        console.log("DB 연동 성공!")
    }
})

app.get('/',(req,res,next)=>{
    res.end("Welcome to backends server");
});

app.post('/login', (req, res, next) => {
    let { username, password } = req.body;
    db.query('SELECT * FROM user_info WHERE id=?', username, (err, result) => {
        if(err || !result[0]) return res.end('id error');
    });
    if(password==result[0].password) return res.redirect('/');
    else return res.end('password error');
});

app.post('/register', (req, res, next) => {
    let { username, email, student_id, password, re_password } = req.body;
    let sql = { username, email, student_id, password, re_password };
    if(password==re_password){
        db.query('INSERT INTO user_info set ?', sql, (err, result) => {
            console.log(err);
        });
    }
});

app.listen(3001, ()=>{
    console.log(`running server...`);
})