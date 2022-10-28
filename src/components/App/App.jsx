import React,{useState} from "react";
import Header from "../Header/Header";
import Results from "../Results/Results";
import SearchBox from "../SearchBox/SearchBox";
import './App.css'

const name = require('@rstacruz/startup-name-generator')


const App=()=>{
  const[Name,setName]=useState([])


  const HandleInput=(value)=>
  {
    console.log(name(value))
    setName(value? name(value):[])
    console.log(value)
  }

    return (
      <div className="app">
        <div className="top">
          <Header />
        </div>
        <div className="middle">
          <SearchBox onInput={HandleInput}/>
        </div>
        <div className="bottom">
          <Results result={Name}/>
        </div>
      </div>
  )
} 


export default App