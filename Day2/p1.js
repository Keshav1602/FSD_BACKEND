const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1 style = "background-color : red ; color : white " >Hello World</h1>');
    res.end("<p>End of response</p>");
});

server.listen(9000, (err) => {
    if(err){
        console.error(err);
        return;
    }   
    console.log('Server is running on port 9000');
});