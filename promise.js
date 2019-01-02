
const condition = true;  // true면 resolve , false면 reject
const promise = new Promise((resolve, reject) => {
    if(condition){
        resolve('성공');
    }else{
        reject('실패');
    }
});

promise
    .then((message) => {
        console.log(message); // 성공(resolve)한 경우 실행
    })
    .catch((error) => {
        console.log(error); // 실패(reject)한 경우 실행
    });


promise
    .then((message) => {
        return new promise((resolve, reject) => {
            resolve(message);
        });
    })
    .then((message2) => {
        console.log(message2);
        return new promise((resolve, reject) => {
            resolve(message2);
        });
    })
    .then((message3) => {
        console.log(message3);
    })
    .catch((error) => {
        console.log(error);
    })

function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => {  // 첫 번째 콜백
        if(err){
            return console.error(err);
        }
        user.name = 'zero';
        user.save((err) => {   // 두 번째 콜백
            if(err){
                return console.error(err);
            }
            Users.findOne({ gender: 'm' }, (err, user) => {  // 세 번째 콜백
                /// 생략
            });
        });
    });
}


function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'zero';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({ gender: 'm' });
        })
        .then((user) => {
            // 생략
        })
        .catch(err => {
            console.error(err);
        });
}


const promise1 = promise.resolve('성공1');
const promise2 = promise.resolve('성공2');
promise.all([promise1, promise2])
    .then((result) => {
        console.log(result); // ['성공1', '성공2']
    })
    .catch((error) => {
        console.log((error) => {
            console.error(error);
        })
    })

