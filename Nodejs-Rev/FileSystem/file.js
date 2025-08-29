const fs = require('fs');
const os = require('os');
const result = fs.readFileSync('contact.txt', 'utf8');
console.log(result);

console.log(os.cpus());