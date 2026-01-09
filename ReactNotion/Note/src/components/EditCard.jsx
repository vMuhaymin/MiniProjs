import { useState } from "react";

function EditCard({isOpen , onClose , onEdit, id , data }){
    if (!isOpen) return null;

    const [ newInfo , setNewInfo ]= useState({
        day: data.day ,
        course: data.course  ,
        totalTime: data.totalTime ,
        material: data.material
    })

    function handleChange(e){
        setNewInfo({ ...newInfo , [e.target.name] :e.target.value });
    }

    return(<>
    {
            <div className="popUp-overlay">
                <div className="addNote">
                    <button className="close" onClick={onClose}>  X </button>


                    <label htmlFor=""> Day :  </label>
                    <select name="day" value = {newInfo.day} onChange={handleChange} required>
                        <option value="Sunday"> Sunday</option>
                        <option value="Monday"> Monday</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                        <option value="Saturday">Saturday</option>
                    </select>

                    <label htmlFor="">Course: </label>
                    <input type="text" placeholder="SWE363" name="course" value= {newInfo.course} onChange={handleChange} required />

                    <label htmlFor="">Total Time: </label>
                    <input type="number"  placeholder="0" name="totalTime" value= {newInfo.totalTime} onChange={handleChange} required/>

                    <label htmlFor="">Material: </label>
                    <input type="text" placeholder="Ch1" name= "material" value={newInfo.material} onChange={handleChange} required/>

                    <button className="add" onClick={() => onEdit(newInfo, id) } > ✓ </button>
                </div>
            </div>
        
    }
        
    </>);
}

export default EditCard;