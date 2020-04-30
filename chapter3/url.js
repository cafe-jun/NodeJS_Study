const url = require('url');

const URL = url.URL;
const myURL = new URL('https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=158379304');
console.log('new URL() : ',myURL);
console.log('url.format() : ',url.format(myURL));
console.log('-----------------------------');
const parsedUrl = url.parse('https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=158379304');
console.log('url.parse() : ',parsedUrl);
console.log('url.format() : ',url.format(parsedUrl));