
function MyCard(){
    return(<>
    <div className="card-container">
            <ul className="main-Info-data"> 
                {/* Require A fix, its table data <td> not <li>  */}
                <li>Day</li>
                <li>Course</li>
                <li>Total Time</li>
                <li> Material </li>
            </ul>
    </div>
    </>);
}

export default MyCard;