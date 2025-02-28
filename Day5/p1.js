const http = require('http');
const fs = require('fs/promises');
const { json } = require('stream/consumers');


const server = http.createServer(async (req,res)=>{
    res.writeHead(200,{'content-type' : 'text/html'});
    if(req.url === '/getData' && req.method === 'GET'){
        let data = await fs.readFile('data.json');
        if(data.length === 0){
            res.end('No data found');
            
        }
        else{

        
        const myHTML = `
        <html>
        <head>
            <title>Document</title>
            <style>
            *{
                padding: 0;
                margin: 0;
                box-sizing: border-box;
            }
            .container{
                border: 1px solid red;
                font-family: 'Courier New', Courier, monospace;
                font-weight: 400;
                background-color: blanchedalmond;
            }
            </style>
            </head>
            <body>
                <h1>Students</h1>
                ${
                    JSON.parse(data).map((ele)=>{
                        return `
                        <div class="container">
                        <h2>Name : ${ele.name}</h2>
                        <p> class : ${ele.class}</p>
                        <p> roll no : ${ele.roll_no}</p>
                        <p>section : ${ele.section}</p>
                        <hr>
                        </div>
                        <br>`
                    }).join('')
                }
            </body>
        </html>
        `;
        res.end(myHTML);
        }
    }
    if(req.url === '/addData' && req.method === 'POST'){
        let body = '';
        req.on('data',chunk =>{
            body +=chunk;
        });
        req.on('end', async ()=>{
            let data = JSON.parse(body);
            const filedata = await fs.readFile('data.json');
            const jsondata = JSON.parse(filedata);
            jsondata.push(data);
            await fs.writeFile('data.json',JSON.stringify(jsondata));
            res.end(JSON.stringify({message:"data added successfully"}));
        })
    }
    return;
});

server.listen(9000,(err)=>{
    if(err){
        console.error(err);
        return;
    }
    console.log('Server is running on port 9000');
});