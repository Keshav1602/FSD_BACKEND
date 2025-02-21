const http = require('http');
const { console } = require('inspector/promises');

const server = http.createServer(async(req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    const data = await fetch('https://fakestoreapi.com/products/');
    const jsondata = await data.json();
    const html = `<html>
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
    <h1>Products</h1>
    ${
        jsondata.map((ele)=>{
            return `
            <div class="container">
            <h2>${ele.title}</h2>
            <p>${ele.description}</p>
            <img src = "${ele.image}" height="200 px" width="150px" alt="${ele.title}">
            <p>${ele.price}</p>
            <hr>
            </div>
            <br>`
        }).join('')
    }
</body>
</html>`
    console.log(html)
    res.end(html);
})

server.listen(9000,(err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('server is running at http://localhost:9000')
})