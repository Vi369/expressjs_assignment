const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send({message: 'i AM HOMEPAGE'})
})
app.get('/about', (req, res)=>{
    res.send({message: 'i am about page'})
})
app.get('/contact', (req, res)=>{
    res.send({email: `support@pwskills.com`})
})

const PORT = 8000;
app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})