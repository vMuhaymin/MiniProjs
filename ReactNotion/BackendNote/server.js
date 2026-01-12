const express = require('express')
const app = express();

app.get('/' , (req, res)=>{
    res.send("Hola from the server side!!")
});

app.listen(5640)
console.log("Server has worked successfully!! Check the below link")
console.log("http://localhost:5640/")