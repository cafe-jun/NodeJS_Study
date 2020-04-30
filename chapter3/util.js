const util = require('util');
const crypto = require('crypto');

const dontUseMe = util.deprecate((x,y) => {
    console.log('x+y');
}, 'dontUserMe 함수는 deprecated 되었으니 더이상 사용하지 마세요!');
dontUseMe(1,2);

const randomBytesPromis = util.promisify(crypto.randomBytes);
randomBytesPromis(64)
          .then((buf) => {
              console.log(buf.toString('base64'));
          })
          .catch((error) =>{
             console.log(error);
          });