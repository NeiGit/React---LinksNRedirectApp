import React, {Component} from 'react';
import './App.css';
import { linkCards } from './docs/samples.json'
import LinkCard from './components/LinkCard'


class App extends Component{
  constructor() {
    super()
    this.state = {
      linkCards
    }
  }
  render() {
  const cards = this.state.linkCards.map(e => {
    return (
              <LinkCard 
                title = {e.title} 
                link = {e.link}
              />
    )
  })
  
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
          <h1 className="navbar-brand" href="/">
            Links
            <span className="badge badge-pill badge-light ml-2">
              {this.state.linkCards.length}
            </span>
          </h1>
      </nav>
    <div className = "container">
      <div className = "row mt-4">
        {cards}
      </div>  
    </div>  
    </div>
  );
}
}

export default App;
