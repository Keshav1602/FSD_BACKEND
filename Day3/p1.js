const http = require('http');
const fs = require('fs/promises');

const server = http.createServer( async (req, res) => {
    res.writeHead(200,{'Content-Type': 'application/json'});
    const data = await fs.readFile('./data.json', 'utf-8',(err) => {
        if(err){
            console.error(err);
            return;
        }
    });
    console.log(data );
    res.end(data);
}
);


server.listen(9000, (err) => {
    if(err){
        console.error(err);
        return;
    }   
    console.log('Server is running on port 9000');
}
);
