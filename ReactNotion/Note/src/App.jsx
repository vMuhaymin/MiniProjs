import { useState } from 'react'
import './App.css'
import MyCard from './components/MyCard'
import NavBar from './components/NavBar'

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
  }];

  return (
    <>

    <NavBar/>
    <MyCard list = {info}/>
    
    
    </>
  )
}

export default App
