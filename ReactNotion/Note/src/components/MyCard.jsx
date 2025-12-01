
function MyCard(){
    const info = [{
        Day: "Thurs",
        Course: "SWE 363",
        TotalTime: 3,
        Material: "Ch 4 and Ch5"
    }
]
        
    const list = info.map((e) => { 
        return ( 
        <ul className="main-Info-data">
            <li> {e.Day} </li>
            <li> {e.Course} </li>
            <li> {e.TotalTime} </li>
            <li> {e.Material} </li>
        </ul>);
        });

    return(<>
    <div className="Container">
        <div className="card-container">
            <ul className="main-Info-data"> 
                {/* Require A fix, its table data <td> not <li>  */}
                <li>Day</li>
                <li>Course</li>
                <li>Total Time</li>
                <li> Material </li>
                <li> <button >⚙️ </button> <button > 🗑️</button> </li>
            </ul>

            {list}
        </div>

     </div>


    </>);
}

export default MyCard;