var mysql = require('mysql');
require('dotenv').config();
var connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PWD,
    database: process.env.DATABASE
})
connection.connect((err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Base de donnees connectée')
})
module.exports = connection;