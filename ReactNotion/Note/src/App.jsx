import { useState } from 'react'
import './App.css'
import MyCard from './components/MyCard'
import NavBar from './components/NavBar'
import AddCard from './components/AddCard';

function App() {

  const [ info , setInfo ] = useState([
    {
      day: "Friday",
      course:"SWE" ,
      totalTime: 36,
      material:"React"
    } ,
        {
      day: "Wednesday",
      course:"ICS 321 " ,
      totalTime: 2,
      material:"DB"
    } 
  ]);

  function addNote(){
    
  }

  return (
    <>

    <NavBar/>
    <MyCard list = {info} />

    </>
  );
}

export default App
