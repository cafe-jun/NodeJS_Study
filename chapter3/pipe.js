const fs = require('fs');

const readStream = fs.createReadStream('readme4.txt');
const writeStream = fs.createWriteStream('write3me.txt');
readStream.pipe(writeStream);
