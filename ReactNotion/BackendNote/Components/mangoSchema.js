const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema({
    day : String,
    course: String,
    totalTime: Number,
    material: String 
}); 

const Note = mongoose.model("Note", noteSchema)

async function createNote(day, course, totalTime, material){
    const document = Note.create({day,course, totalTime , material})
    return document;
}


module.exports = createNote;