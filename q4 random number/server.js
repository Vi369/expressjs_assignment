const express = require('express');

const app = express();
app.get('/', (req, res)=>{
    res.send("for random no. visit http://localhost:7000/random");
})
app.get('/random', (req, res)=>{
    res.send(`Random:${Math.floor(Math.random()*100)}`)
})

const PORT = 7000
app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})