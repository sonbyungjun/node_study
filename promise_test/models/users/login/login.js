const mysql = require('../../connection')

module.exports = login = async(user, cb) =>{
    const checkUser = (user) => {
        return new Promise((resolve, reject) => {
            const { username, password } = user
            // console.log(user)
            if(!username) return reject(new Error('아이디를 입력하세요'))
            if(!password) return reject(new Error('비밀번호를 입력하세요'))
            resolve()
        })
    }
    
    const loginUser = (user) => {
        return new Promise((resolve, reject) => {
            const arr = [user.username, user.password]
            const sql = `SELECT * FROM users where username = ? and password = ?`
            mysql.query(sql, arr, (err, result) => {
                if(err) return reject(err)
                return resolve(result)
            })
        })
    }
    
    
    try{
        await checkUser(user)
        const result = await loginUser(user)
        cb(null, JSON.stringify(result[0]))
    }catch(err){
        cb(err)
        // console.error(err)
    }
}
