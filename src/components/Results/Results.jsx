import React from "react";


const Results=({result})=>
{
    console.log(result)
    return(
        <div className="container">
            <h1>Results</h1>
            <p>{result.length > 0 ? result[12]:null}</p>
        </div>
    )
}

export default Results