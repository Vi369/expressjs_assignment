// http module
const http = require('http');


const server = http.createServer((req, res)=>{
    res.writeHead(200, ({'Content-Type':'application/json'}));
    if(req.url=='/'){
        res.end(JSON.stringify({message:'Welcome to Men and Women Dummy Data'}));
    }else if(req.url=='/men'){
        res.end(JSON.stringify(
            {
                "id": 1,
                "name": "John Doe",
                "clothing": "T-shirt",
                "brand": "Nike",
                "size": "Medium",
                "color": "Blue",
                "price": 29.99
            }
        ));
    }else if(req.url=='/women'){
        res.end(JSON.stringify(
            {
                "id": 1,
                "name": "Emily Johnson",
                "clothing": "Dress",
                "brand": "Zara",
                "size": "Small",
                "color": "Pink",
                "price": 79.99
              }
              
        ));
    }
    else{
        res.statusCode = 404;
        res.end(JSON.stringify({message: 'Page not Found'}));
    }
})

const PORT = 8000;
server.listen(PORT, ()=>{
    console.log(`server is runing on ${PORT}`);
})