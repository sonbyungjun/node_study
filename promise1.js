const querylLogin = (id, pw) => {
    setTimeout(() => {
        console.log(`${id}와 ${pw}를 토대로 DB에서 맞는 회원 검색...`)
    }, 2000);    
}

const checkRealUser = () => {
    console.log('진짜 있는 회원인지 검사...')
} 

const loginSuccess = () => {
    setTimeout(() => {
        console.log('로그인 성공 메시지 전송')
    }, 500);
}

querylLogin('aaa', '111');
checkRealUser()
loginSuccess()

