const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res)=>{
    res.send("this is a Homepage")
})

app.listen(port, ()=>{

console.log(`server is running on ${port}`)
})