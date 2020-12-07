const mySql = require('mysql')

const info = {
    host: 'localhost',
    user: 'root',
    password: '1234',
    port:  3306 ,
    database: 'lost_found'
}

let mysql = mySql.createConnection(info)

mysql.connect((error)=> {
    if(error){
        console.log("DB 연동 실패 : ", error)
    }
    else {
        console.log("DB 연동 성공!")
    }
})

module.exports = {
    mysql, info
}