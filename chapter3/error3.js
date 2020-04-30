procees.on('uncaughtException',(err)=> {
    console.error('예상 하지 못하는 에러 ');
});

setInterval(() => {
    throw new Error('서버를 고장내주마');
},1000);

setTimeout(() => {
    console.log('실행됩니다');
},2000);
