const http = require('http');
const fs = require('fs');

const server = http.createServer(async (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    await fs.readFile('index.html', (err, data) => {
        if(err){
            console.error(err);
            return;
        }
        res.end(data);
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