const express = require('express');

const app = express();

let counter = 10;
app.get('/', (req, res)=>{
    res.send({counter: counter});
})
app.get('/increment', (req, res)=>{
    counter= counter+1;
    res.send({counter: counter});
})
app.get('/decrement', (req, res)=>{
    counter = counter-1;
    res.send({counter: counter});
})


const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})