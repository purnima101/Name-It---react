import React from "react";
import './SearchBox.css'

const SearchBox=({onInput})=>{
    return(
        <div className="search-box">
            <input onChange={(event)=>onInput(event.target.value)} placeholder="Enter" type="text" className="search-input"/>
        </div>
    )
}

export default SearchBox