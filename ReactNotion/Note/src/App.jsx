import { useState } from 'react'
import './App.css'
import MyCard from './components/MyCard'
import NavBar from './components/NavBar'
import AddCard from './components/AddCard';

function App() {


  const info = [{
    day: "Meow",
    course:"SWE" ,
    totalTime: 36,
    material:"React"
  },
  {
    day: "Meow",
    course:"SWE" ,
    totalTime: 36,
    material:"React"
  },];

  const isIt = true;

  return (
    <>

    <NavBar/>
    <MyCard list = {info}/>
  
    <AddCard isOpen={isIt} />
    
    
    </>
  )
}

export default App
