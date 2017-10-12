import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      items: []
    }
  }
  componentDidMount(){
    fetch(`/Platform/Destiny2/Armory/Search/DestinyInventoryItemDefinition/exotic/`, {
      headers: {
        "x-api-key":`${process.env.REACT_APP_API_KEY}`
      }
    })
    .then(results => {
      // console.log(results)
      return results.json()
    }).then(data => {
      console.log(data.Response.results.results)
      this.setState({
        items: data.Response.results.results
      })
    })
  }
  render() {
    const elements = this.state.items.map(thing => {
      return(
        <div key={thing.hash} style={{background:"pink"}}>
          <h2>{thing.displayProperties.name}</h2>
          <img src={"https://www.bungie.net"+thing.displayProperties.icon} alt={thing.hash}/>
        </div>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Derstony Too!</h1>
        </header>
        <div>
          {elements}
        </div>
      </div>
    );
  }
}

export default App;
