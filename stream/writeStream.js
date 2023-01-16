const fs = require('fs');

const writeStream = fs.createWriteStream('./stream/output.txt', { encoding: 'utf-8', flags: 'a+' });

const chunk1 = 'Viktor \n';
const chunk2 = 'Teodor \n';
const chunk3 = 'Go6o \n';
const chunk4 = 'Venelin \n';
const chunk5 = 'Desi';

writeStream.write(chunk1);
writeStream.write(chunk2);
writeStream.write(chunk3);
writeStream.write(chunk4);
writeStream.write(chunk5);

writeStream.on('close', () => console.log('Written stream'));

writeStream.end();