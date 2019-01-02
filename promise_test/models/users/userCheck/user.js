const mysql = require('../../connection')

module.exports = userCheck = async(user, cb) =>{
    const loginUser = (user) => {
        return new Promise((resolve, reject) => {
            const arr = [user.id]
            const sql = `SELECT COUNT(*) FROM users where username = ?;`
            mysql.query(sql, arr, (err, result) => {
                if(err) return reject(err)
                return resolve(result)
            })
        })
    }
    
    
    try{
        const result = await loginUser(user)
        cb(null, JSON.stringify(result[0]))
    }catch(err){
        cb(err)
        // console.error(err)
    }
}
