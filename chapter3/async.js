const fs = require('fs');

console.log('읽기를 시작합니다');

fs.readFile('./readme2.txt',(err,data) => {
    if(err)
        throw err;
    console.log('1번',data.toString());
});

fs.readFile('./readme2.txt',(err,data) => {
    if(err)
        throw err;
    console.log('2번',data.toString());
});

fs.readFile('./readme2.txt',(err,data) => {
    if(err)
        throw err;
    console.log('3번',data.toString());
});

console.log('끝');