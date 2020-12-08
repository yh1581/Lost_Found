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
        console.log("Mysql Connect failed!!!: ", error)
    }
    else {
        console.log("Mysql Connected...")
    }
})

module.exports = {
    mysql, info
}