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
    const URL = 'http://localhost:35000/api/retriveInfos';

    fetch(URL)
    .then(res => res.json())
    .then(data=> setInfo(data))
    .catch( err => console.error(err))

  } , []);

  function addNote( newNote ){
    setInfo(prev => [...prev, newNote])
  }

  function onEdit(adjusted){
    setInfo( [...oldInfo , adjusted]);

  }

  function onDelete(deleted){
    setInfo( prev => prev.filter((e)=> e._id !== deleted._id));
    helperToDelete(deleted).catch((err)=>{
      console.log(`faild to send due to this err: ${err}`)
      setInfo( prev => [...prev, deleted] )
    });
  }

  async function helperToDelete(data){

    const URL = "http://localhost:35000/mongo/delete"
    const response = await fetch(URL, {
      method: "POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({id: data._id}),
    })
    if(!response.ok){
      throw new Error(`HTTP ${response.status}`)
    }
    return response.json();
  }



  return (
    <>

    <NavBar onAdd={addNote} />
    <MyCard list = {info} onEdit= {onEdit} onDelete={onDelete}/>

    </>
  );
}

export default App
