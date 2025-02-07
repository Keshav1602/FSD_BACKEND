const fs = require('fs');
const path = require('path');
data = "my name is keshav and I am a software developer"
fs.writeFile("./data.txt", data);
const input = fs.readFileSync(path.resolve(__dirname, 'data.txt'), 'utf8');
console.log(input);