const http = require('http');
const fs = require('fs/promises');


const server = http.createServer( async (req, res) => {
    const data = await fetch("https://dummyjson.com/products/");
    const response = await data.json();
    if(!response){
        res.writeHead(404, {'Content-Type': 'application/json'});
    }
    res.writeHead(200, {'Content-Type': 'application/json'});
    // console.log(response);
    res.end(JSON.stringify(response.products.map(product => product.title)));
});



server.listen(9000, (err) => {
    if(err){
        console.error(err);
        return;
    }   
    console.log('Server is running on port 9000');
});
