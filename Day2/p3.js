const http = require('http');
const fs = require('fs');

const user = [
    {   
        name: 'John Doe',
        age: 25,
        email: 'john@gmai.com',
    },
    {   
        name: 'Jnckdsg',
        age: 24,
        email: 'vjjdsghv',
    }
]

const server = http.createServer(async (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end( await JSON.stringify(user.map((u) => { return {name: u.name}; })));
});

server.listen(9000, (err) => {
    if(err){
        console.error(err);
        return;
    }   
    console.log('Server is running on port 9000');
});
