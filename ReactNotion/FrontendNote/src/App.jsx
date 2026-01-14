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
      course:"SWE 363" ,
      totalTime: 6,
      material:"React"
    },
    {
      id: 2,
      day: "Wednesday",
      course:"ICS 321 " ,
      totalTime: 2,
      material:"DB"
    } ,
    {
      id: 3,
      day: "Sunday",
      course:"ICS 343 " ,
      totalTime: 1,
      material:"TCP"
    } 
  ]);

  function addNote( newNote ){
    setInfo([...info, newNote])
  }

  function onEdit(adjusted){
    const oldInfo =  info.filter( (e) => e.id !==adjusted.id )
    setInfo( [...oldInfo , adjusted]);

  }

  
  function onDelete(deleted){
    setInfo( prev => prev.filter((e)=> e.id !== deleted.id));
  }

  async function sendData(info) {
    const response = await fetch(`http://localhost:33551/`,{
      method: "POST",
      headers: {"Content-Type" : "application/json"}, 
      body: JSON.stringify({info})
      });
    const result = await response.json();
    console.log(result) 
  }

  return (
    <>

    <NavBar onAdd={addNote} />
    <MyCard list = {info} onEdit= {onEdit} onDelete={onDelete}/>
    <button onClick={()=> sendData(info)} > Send data  </button>

    </>
  );
}

export default App
