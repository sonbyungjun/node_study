setInterval(() => {
    console.log('시작');
    try{
        throw new error('서버를 고장내주마!');
    } catch (err){
        console.error(err);
    }
}, 1000);