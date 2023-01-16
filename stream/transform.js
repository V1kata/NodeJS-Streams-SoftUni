const fs = require('fs');
const zlib = require('zlib');

const gzib = zlib.createGzip();
const readStream = fs.createReadStream('./stream/data.txt');
const writeStream = fs.createWriteStream('./stream/transform.txt');

readStream.pipe(gzib).pipe(writeStream); 