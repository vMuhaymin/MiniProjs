const express = require('express')
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

app.post('/' , (req, res)=>{
    const courseInfo = req.body.info 

    if( courseInfo[0].course === 'SWE 363'){
        console.log(`The subject is ${courseInfo[0].course} and its total time ${courseInfo[0].totalTime }` )
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