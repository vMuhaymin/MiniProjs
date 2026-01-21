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

//Adding a new note
app.post('/mongo/delete', async (req, res)=>{

  const id = req.body.id
  const doc = await createNote.deleteOne({_id : id});
  if(id){
    console.log(`The item with this id: ${id} will be deleted with this info: ${doc}`)
    res.status(200).send("Ok")
  }
  else{
    console.log("No id recieved but the root API is 🆙")
    res.status(400).send("Request is failed")
  }
  
});

app.post('/api/addNote' , async (req, res)=>{
    const courseInfo = req.body.data 

    if(courseInfo){
        const doc = await createNote.create({
              day : courseInfo.day,
              course: courseInfo.course,
              totalTime: courseInfo.totalTime,
              material: courseInfo.material 
        })
        console.log(doc)
        res.status(200).send("Ok")
    }
    else{
         console.log("Request is failed")
         res.status(400).send("Request is failed")
    }

});

app.get('/api/retriveInfos', async (req,  res)=>{
    const data = await createNote.find()
    res.status(200).json(data);
    console.log(`The data has been sent successfully`);
});


const PORT = process.env.PORT || 3000
app.listen(PORT)
console.log("The server is up ✅, Check the below link")
console.log(`http://localhost:${PORT}/`)

