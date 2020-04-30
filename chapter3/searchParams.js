const { URL } = require('url');

const myURL = new URL('https://www.aladin.co.kr/shop/wproduct.aspx?ItemId=158379304');
console.log('searchParams : ',myURL.searchParams);
console.log('searchParams.getAll() : ',myURL.searchParams.getAll('ItemId'));
console.log('searchParams.get() : ',myURL.searchParams.get('ItemId'));
console.log('searchParams.has() : ',myURL.searchParams.has('ItemId'));


console.log('searchParams.keys() : ',myURL.searchParams.keys());
console.log('searchParams.values() : ',myURL.searchParams.values());

myURL.searchParams.append('filter','es3');
myURL.searchParams.append('filter','es5');
console.log(myURL.searchParams.getAll('fliter'));

myURL.searchParams.set('filter','es3');
console.log(myURL.searchParams.getAll('fliter'));

myURL.searchParams.delete('filter','es3');
console.log(myURL.searchParams.getAll('fliter'));

console.log('searchParams.toString() : ',myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();


