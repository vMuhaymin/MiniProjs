import { useState } from 'react'
import './App.css'
import MyCard from './components/MyCard'
import NavBar from './components/NavBar'
import AddCard from './components/AddCard';

function App() {

  const info = [{
    day: "Thursday",
    course:"Fucking Leena" ,
    totalTime: "3 hr",
    material:"Bed then chair"
  },
  {
    day: "Friday",
    course:"Suck my dick" ,
    totalTime: 36,
    material:"React"
  },];

  const isIt = true;

  return (
    <>

    <NavBar/>
    <MyCard list = {info}/>
    <AddCard isOpen={isIt}/>

    </>
  );
}

export default App
