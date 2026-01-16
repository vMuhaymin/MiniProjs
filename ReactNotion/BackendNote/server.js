const express = require('express')
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.post('/' , (req, res)=>{
    const courseInfo = req.body.data 

    if( courseInfo.course){
        console.log(`The subject is ${courseInfo.course} and its total time ${courseInfo.totalTime }` )
        res.status(200).send("Ok")
    }
    else{
         console.log("Request is failed")
         res.status(400).send("Request is failed")
    }

});



PORT = 33551
app.listen(PORT)
console.log("Server has worked successfully!! Check the below link")
console.log(`http://localhost:${PORT}/`)