import { useState } from "react";

function AddCard(props){

    const [popUp, usePopUp] = useState(props.isOpen)
    

    return(<>
    {
            props.isOpen &&
            <div className="popUp-overlay">
                <div className="addNote">
                    <label htmlFor=""> Day  </label>
                    <select name="" id="">
                        o
                    </select>


                </div>
            </div>

    }

    </>);
}

export default AddCard;