import React from "react";
import NameCard from "../NameCard/NameCard";
import './Results.css'

const Results=({result})=>
{
    const SuggestedNames=result.map(names=>
        {
            return <NameCard name={names} />
        })
    console.log(result)
    return(
        <div className="container">
            <p className="it">{SuggestedNames}</p>
        </div>
    )
}

export default Results