const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=158379304');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parase() : ',query);
console.log('querystring.stringify() : ',querystring.stringify(query));
