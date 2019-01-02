const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const db = require('./models')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('./publics'))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index', {user : null})
})

app.get('/login', (req, res) => {
    res.render('user/login')
})

app.post('/login', (req, res, next) => {
    db.users.login.login(req.body, (err, result)=> {
        if(err) return next(err)
        if(result == undefined){
            res.send(`아이디와 비밀번호를 확인해주세요<a href="/">뒤로가기</a>`)
        }else{
            res.render('index', {user : result})
        }
    })
})

app.get('/logout', (req, res) => {
    res.redirect('/')
})

app.get('/signup', (req, res) => {
    res.render('user/signup')
})

app.post('/signup', (req, res) => {
    db.users.create.signUp(req.body)
    res.redirect('/')
})

app.post('/userCheck', (req, res) => {
    db.users.userCheck.userCheck(req.body, (err, result) =>{
        if(err) return next(err)
        res.json({user:result})
    })
})

// error 처리...
// err 파라미터가 있으면 다른 미들웨어는 건너 뛰고 바로 이 미들웨어로 온다.
app.use(function (err, req, res, next) {
	res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"})
	console.error(err);
	res.end("<h1>오류!</h1>")
});

app.listen(8002, function () {
  console.log('8002번 포트 구동중...');
});




