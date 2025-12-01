
function MyCard(){
    return(<>
    <div className="Container">

        <div className="card-container">
            <ul className="main-Info-data"> 
                {/* Require A fix, its table data <td> not <li>  */}
                <li>Day</li>
                <li>Course</li>
                <li>Total Time</li>
                <li> Material </li>
                <div className="option"> <button >⚙️ </button> <button > 🗑️</button></div>
                
            </ul>

            

        </div>

        

    </div>


    </>);
}

export default MyCard;