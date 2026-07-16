const path = require('path');
const os = require('os');

const filePath = path.join(__dirname, 'data', 'notes.txt');

console.log(`File Path: ${filePath}`);
console.log(`Extension Name: ${path.extname(filePath)}`);
console.log(`Directory Name: ${path.dirname(filePath)}`);
console.log(os.homedir());
console.log(os.arch());
