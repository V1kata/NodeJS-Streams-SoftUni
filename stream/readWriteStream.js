const fs = require('fs');

const readStream = fs.createReadStream('./stream/data.txt');
const writeStream = fs.createWriteStream('./stream/copy.txt');

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});

readStream.on('end', () => {
    writeStream.end();
});