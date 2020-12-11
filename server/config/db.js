const mySql = require('mysql')

const info = {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DATABASE
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