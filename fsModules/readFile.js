const fs = require('fs');
const fsp = require('fs/promises');

// Syncronomous reading from file
const text = fs.readFileSync('./fsModules/data.txt', { encoding: 'utf-8' });
console.log(text);
console.log('Jo');
// Data > Jo

// Asyncronomous reading from file
fs.readFile('./fsModules/data.txt', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
        return err;
    }

    console.log(data);
});

console.log('Jo');
// Jo > Data

// Fs Promise
async function promiseFs() {
    await fsp.readFile('./fsModules/data.txt', { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            return err;
        }
    
        console.log(data);
    });

    console.log('Jo');
}

promiseFs();
// Data > Jo