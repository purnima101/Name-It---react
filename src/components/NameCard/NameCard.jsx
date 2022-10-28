import React from "react";
import './NameCard.css'

const NameCard=({name})=>
{
  
    return(
        <div className="container-name">
            <p className="item">{name}</p>
        </div>
    )
}

export default NameCard