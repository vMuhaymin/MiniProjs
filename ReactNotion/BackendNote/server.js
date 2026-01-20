const express = require('express')
const cors = require("cors");
const app = express();

const mongoose = require("mongoose")
const createNote = require('./Components/mangoSchema.js')
require("dotenv").config();

async function startServer() {
  const URI = process.env.MANGO
  try{
    await mongoose.connect(URI)
    console.log(`The connection is Up for mongoose✅`)
  }
  catch(e){
    console.error(e)
  }
}

startServer().catch(console.error);

// Important for APIs communications
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());

//For testing only
app.post('/api/addNote' , (req, res)=>{
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

app.get('/api/retriveInfos', (req,  res)=>{
    const data = [
  {
      id: Math.floor(Math.random()*100),
      day: "Sunday",
      course:"ICS 381" ,
      totalTime: 1,
      material:"AI states"
    },
    {
      id: Math.floor(Math.random()*100),
      day: "Wednesday",
      course:"ICS 353" ,
      totalTime: 2,
      material:"Merging"
    } ,
    {
      id: Math.floor(Math.random()*100),
      day: "Wednesday",
      course:"ICS 381 " ,
      totalTime: 2,
    material:"Agents"
    }
    ];
    res.status(200).json(data);
    console.log(`The data has been sent successfully`);
});


const PORT = process.env.PORT || 3000

app.listen(PORT)
console.log("The server is up ✅, Check the below link")
console.log(`http://localhost:${PORT}/`)

