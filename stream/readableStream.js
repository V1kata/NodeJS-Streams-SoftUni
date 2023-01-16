const fs = require('fs') //file system

const readStream = fs.createReadStream('./stream/data.txt'); // create read stream

readStream.on('data', (chunk) => {
    console.log('---------------------- New Chunk -----------------------');
    // console.log(decodeURIComponent(chunk));
    console.log(chunk)
});

readStream.on('end', () => { console.log('ended') });