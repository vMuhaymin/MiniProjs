import { useState } from "react";
import EditCard from './EditCard';

function MyCard(props){

    const [popUp , setPopUp] = useState(false)
    const [e , setE] = useState({})

    function openNote( e ){
        setPopUp(true);
        setE(e)

    }

    function closeNote(){
        setPopUp(false);
    }

    function onEdit(data){
        props.onEdit(data)
    }

    const toList = props.list        
    const list = toList.map((e) => { 
        return ( 
                <div className="card-container" key={e.id}>
                    <ul className="main-Info-data"> 
                        {/* Require A fix, its table data <td> not <li>  */}
                        <li>ID</li>
                        <li>Day</li>
                        <li>Course</li>
                        <li>Total Time</li>
                        <li> Material </li>
                        <li> <button onClick={()=> openNote(e)}>⚙️ </button> <button onClick={()=> props.onDelete(e.id) } > 🗑️</button> </li>
                    </ul>
                    <ul className="main-Info-data">
                        <li> {e.id} </li>
                        <li> {e.day} </li>
                        <li> {e.course} </li>
                        <li> {e.totalTime} </li>
                        <li> {e.material} </li>
                    </ul>
                </div>
        );
    });

    return(<>
        <div className="Container">
            {list}
        </div>
    
    {/* Added note here is the new adjusted data. if you went to NavBar component, this will add a new card not adjust the current card */}
    <EditCard isOpen={popUp} onClose={closeNote} onEdit = {onEdit} data = {e} />

    </>);
}

export default MyCard;