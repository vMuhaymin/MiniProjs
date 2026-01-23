// All we need here is to initialise the schema only

const mongoose = require("mongoose")
const noteSchema = new mongoose.Schema({
    day : String,
    course: String,
    totalTime: String,
    material: String 
}); 

const Note = mongoose.model("Note", noteSchema)
module.exports = Note;