import { useState } from 'react'
import './App.css'
import MyCard from './components/MyCard'
import NavBar from './components/NavBar'
import AddCard from './components/AddCard';
import { useEffect } from 'react';

function App() {


  const [ info , setInfo ] = useState([]);
  const [refreshCounter, setRefreshCounter]=  useState(0);

  useEffect(()=>{
    //Upload the URL here 
    const URL = 'http://localhost:35000/api/retrieveInfos';

    fetch(URL)
    .then(res => res.json())
    .then(data=> setInfo(data))
    .catch( err => console.error(err))

  } , [refreshCounter]);

  function addNote( newNote ){
    setInfo(prev => [...prev, newNote])
  }

  async function onEdit(adjusted){
    const URL = 'http://localhost:35000/mongo/adjust';
    console.log(`The data is: ${adjusted}`)
    console.log(`The chapter is: ${adjusted.material}`)

    const response = await fetch(URL, {
      method: "POST",
      headers: {"Content-Type":"Application/json"},
      body: JSON.stringify({adjusted})
    });
    if(!response.ok){
      console.log(`Error occur while editing: ${response.status}`)
    }

    setRefreshCounter(c => c +1)
  }

  function onDelete(deleted){
    setInfo( prev => prev.filter((e)=> e._id !== deleted._id));
    helperToDelete(deleted).catch((err)=>{
      console.log(`failed to send due to this err: ${err}`)
      // setInfo( prev => [...prev, deleted] ) Will be added later, this simply to make the UI clean BUT NO NEED FOR IT
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
