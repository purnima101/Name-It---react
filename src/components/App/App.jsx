import React from "react";
import Header from "../Header/Header";
import Results from "../Results/Results";
import SearchBox from "../SearchBox/SearchBox";
import './App.css'

const name = require('@rstacruz/startup-name-generator')
class App extends React.Component{
  state={
    name:[]
  }

  HandleInput=(value)=>
  {
    console.log(name(value))
    this.setState({
      name: name(value)
    })
    console.log(value)
  }

  render(){
    
    return (
      <div className="app">
        <div className="top">
          <Header />
        </div>
        <div className="middle">
          <SearchBox onInput={this.HandleInput}/>
        </div>
        <div className="bottom">
          <Results result={this.state.name}/>
        </div>
      </div>
  )
} 
}

export default App