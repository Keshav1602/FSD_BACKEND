const http = require('http');

const server = http.createServer((req, res) => {
    
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Welcome to the homepage'}));
    }
    else if(req.url === '/about'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Welcome to the about page'}));

    }
    else if(req.url === '/contact'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: 'Welcome to the contact page'}));
    }
    else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({message: '404 Page not found'}));
    }

});


server.listen(9000, (err) => {
    if(err){
        console.error(err);
        return;
    }   
    console.log('Server is running on port 9000');

});