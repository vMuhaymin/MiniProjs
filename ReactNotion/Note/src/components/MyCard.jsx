import { useState } from "react";

function MyCard(props){

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
                        <li> <button onClick={()=> props.onEdit(e.id) }>⚙️ </button> <button > 🗑️</button> </li>
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
    </>);
}

export default MyCard;