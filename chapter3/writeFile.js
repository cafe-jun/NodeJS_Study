const fs = require('fs');

fs.writeFile('./writeme.txt','글이 입력됩니다.',(err) => {
    if(err)
        throw err;
    console.log('파일이 생성되었습니다');
fs.readFile('./writeme.txt',(err,data) => {
    if(err)
        throw err;      
    console.log(data.toString());
    });
});