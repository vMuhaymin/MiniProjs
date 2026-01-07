import { useState } from "react";

function MyCard(props){

    const toList = props.list        
    const list = toList.map((e) => { 
        return ( 
                <div className="card-container">
                    <ul className="main-Info-data"> 
                        {/* Require A fix, its table data <td> not <li>  */}
                        <li>Day</li>
                        <li>Course</li>
                        <li>Total Time</li>
                        <li> Material </li>
                        <li> <button >⚙️ </button> <button > 🗑️</button> </li>
                    </ul>
                    <ul className="main-Info-data">
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