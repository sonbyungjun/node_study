const mysql = require('../../connection')

module.exports = signUp = async(newUser) =>{
    const checkUser = (newUser) => {
        return new Promise((resolve, reject) => {
            const { username, password, name } = newUser
            if(!username) return reject(new Error('아이디를 입력하세요'))
            if(!password) return reject(new Error('비밀번호를 입력하세요'))
            if(!name) return reject(new Error('이름을 입력하세요'))
            resolve()
        })
    }
    
    const insertUser = (newUser) => {
        return new Promise((resolve, reject) => {
            const sql = `insert into users set ?`
            const injection = newUser
            mysql.query(sql, injection, (err, result) => {
                if(err) return reject(err)
                return resolve(result)
            })
        })
    }


    try{
        await checkUser(newUser)
        await insertUser(newUser)
    }catch(err){
        console.error(err)
    }
    
}
