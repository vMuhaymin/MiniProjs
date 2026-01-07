import { useState } from "react";

function AddCard({isOpen , onClose}){
    if (!isOpen) return null;

    const [ addedInfo , setNewInfo ]= useState({
        day: "" ,
        course: "" ,
        totalTime:"" ,
        material: "" 
    })

    function handleChange(e){
        setNewInfo({ ...addedInfo , [e.target.name] :e.target.value });
    }

    return(<>
    {
            <div className="popUp-overlay">
                <div className="addNote">
                    <button className="close" onClick={onClose}>  X </button>
                    <label htmlFor=""> Day :  </label>
                    <select name="day" value = {addedInfo.day} onChange={handleChange} required>
                        <option value="Sunday"> Sunday</option>
                        <option value="Monday"> Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>

                    <label htmlFor="">Course: </label>
                    <input type="text" placeholder="SWE363" name="course" value= {addedInfo.course} onChange={handleChange} required />

                    <label htmlFor="">Total Time: </label>
                    <input type="number"  placeholder="0" name="totalTime" value= {addedInfo.totalTime} onChange={handleChange} required/>

                    <label htmlFor="">Material: </label>
                    <input type="text" placeholder="Ch1" name= "material" value={addedInfo.material} onChange={handleChange} required/>

                    <button className="add"> ✓ </button>
                </div>
            </div>

    }
        
    </>);
}

export default AddCard;