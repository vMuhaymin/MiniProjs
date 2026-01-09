import { useState } from 'react'
import './App.css'
import MyCard from './components/MyCard'
import NavBar from './components/NavBar'
import AddCard from './components/AddCard';

function App() {

  const [ info , setInfo ] = useState([
    {
      id: 1,
      day: "Friday",
      course:"SWE" ,
      totalTime: 36,
      material:"React"
    },
    {
      id: 2,
      day: "Wednesday",
      course:"ICS 321 " ,
      totalTime: 2,
      material:"DB"
    } 
  ]);

  function addNote( newNote ){
    setInfo([...info, newNote])
  }

  function onEdit(adjusted, id){
    info.forEach( (e)=> {
      if (e.id === id ){
        e.id === id  && console.log(`Correct Edit! The id is ${e.id } `) 
      }
      return ;
    })
  }

  
  function onDelete(id){
    info.forEach( (e)=> {
      e.id === id && console.log(`Correct Delete! The id is ${e.id} `) 
    })
  }

  return (
    <>

    <NavBar onAdd={addNote} />
    <MyCard list = {info} onEdit= {onEdit}/>

    </>
  );
}

export default App
