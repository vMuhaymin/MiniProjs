import AddCard from './AddCard';
import { useState } from "react";


function NavBar(){
    
    const [popUp , setPopUp] = useState(false)

    function addNote(){
        setPopUp(!popUp)
    }

    return(<>
    <div className="nav">
            <div className="logo"><h2>Logo </h2> </div>
             <div className="search"> <input type="text" name="" id="" placeholder="Search ... " /> <button> 🔎</button> </div>
             <div className="button"> </div>
             <div className="Options"> <button onClick={addNote} >  Add Note </button> </div>
    </div>
    <AddCard isOpen={popUp}/>

    </>);
}

export default NavBar;