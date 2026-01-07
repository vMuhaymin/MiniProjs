import { useState } from "react";



function AddCard(props){

    
    

    return(<>
    {
            props.isOpen &&
            <div className="popUp-overlay">
                <div className="addNote">
                    <button className="close">  X </button>
                    <label htmlFor=""> Day :  </label>
                    <select name="Day" id="">
                        <option value="Sunday"> Sunday</option>
                        <option value="Monday"> Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>

                    <label htmlFor="">Course: </label>
                    <input type="text" placeholder="SWE363"/>

                    <label htmlFor="">Total Time: </label>
                    <input type="number"  placeholder="0"/>

                    <label htmlFor="">Material: </label>
                    <input type="text" placeholder="Ch1" />

                    <button className="add"> ✓ </button>


                </div>
            </div>

    }

    </>);
}

export default AddCard;