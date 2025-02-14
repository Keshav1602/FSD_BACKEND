const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const filePath = path.join(__dirname, 'data.json');
    fs.readFile(filePath, (err, data) => {
        if(err){
            console.error(err);
            return;
        }
        const users = JSON.parse(data).users.map(user => user.name);
        res.end(JSON.stringify(users));
    });
});

server.listen(9000, (err) => {
    if(err){
        console.error(err);
        return;
    }   
    console.log('Server is running on port 9000');
}
);
