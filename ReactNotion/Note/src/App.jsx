import { useState } from 'react'
import './App.css'
import MyCard from './components/MyCard'
import NavBar from './components/NavBar'
import AddCard from './components/AddCard';

function App() {

  const [popUp , usePopUp] = useState(false)

  const info = [
    {
      day: "Friday",
      course:"SWE" ,
      totalTime: 36,
      material:"React"
    } 
    
  ];

  

  return (
    <>

    <NavBar/>
    <MyCard list = {info}/>
    <AddCard isOpen={popUp}/>

    </>
  );
}

export default App
