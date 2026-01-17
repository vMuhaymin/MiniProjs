import { useState } from 'react'
import './App.css'
import MyCard from './components/MyCard'
import NavBar from './components/NavBar'
import AddCard from './components/AddCard';
import { useEffect } from 'react';

function App() {


  const [ info , setInfo ] = useState([]);

  useEffect(()=>{
    //Upload the URL here 
    const URL = 'http://localhost:33551/api/retriveInfos';

    fetch(URL)
    .then(res => res.json())
    .then(data=> setInfo(data))
    .catch( err => console.error(err))

  } , []);



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

  return (
    <>

    <NavBar onAdd={addNote} />
    <MyCard list = {info} onEdit= {onEdit} onDelete={onDelete}/>

    </>
  );
}

export default App
