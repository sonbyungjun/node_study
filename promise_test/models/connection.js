const mysql = require('mysql');

const option = {
    host     : 'saint2030.synology.me',
    port     : '3306',
    user : 'root',
    password : 'qudwnsl1',
    database : 'study_promise',
    multipleStatements : true,
}

let connection = mysql.createConnection(option)

// methods
connection.connect(err => {
    if (err) return console.error(err)
    console.log('database is conneted...')
})

module.exports = connection;