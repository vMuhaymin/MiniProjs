import AddCard from './AddCard';
import { useState } from "react";


function NavBar({onAdd}){
    
    const [popUp , setPopUp] = useState(false)
 

    function openNote(){
        setPopUp(true);
    }

    function closeNote(){
        setPopUp(false);
    }

    function newAddedNote(data){
        onAdd(data)
    }

    return(<>
    <div className="nav">
            <div className="logo"><h2>Logo </h2> </div>
             <div className="search"> <input type="text" name="" id="" placeholder="Search ... " /> <button>🔎</button> </div>

            <div className="Options"> <button onClick={openNote} >Add Note</button> </div>
    
    </div>
    
    <AddCard  isOpen={popUp} onClose={closeNote} addedNote = {newAddedNote} />

    </>);
}

export default NavBar;