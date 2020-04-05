import React, {Component} from 'react';
import './App.css';
import { linkCards } from './docs/samples.json'
import LinkCard from './components/LinkCard'
import LinkCreationForm from './components/LinkCreationForm'
import FileManager from 'fs'


class App extends Component{
  constructor() {
    super()
    this.state = {
      linkCards
    }
  }

  addNewCard = (name, src) => {
    const newCard = {
      title : name,
      link : src
    }
    this.setState({
      linkCards : [...this.state.linkCards, newCard]
    })
  }

  handleDelete = linkCardTitle => {
    const linkCards= this.state.linkCards.filter(l => l.title !== linkCardTitle)
    this.setState ({
      linkCards
    })
  }

  saveCardsToJson = () => {
    console.log(FileManager)
    FileManager.writeFileSync('/docs/samples2.json', JSON.stringify(this.state.linkCards))
  }
  render() {
  const cards = this.state.linkCards.map(e => {
    return (
              <LinkCard 
                key = {e.title}
                title = {e.title} 
                link = {e.link}
                deleteLinkCard = {this.handleDelete}
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
      <LinkCreationForm addNewCard = {this.addNewCard}/>
      <div className = "container">
        <div className = "row mt-4">
          {cards}
        </div>  
      </div>
      <div name = "footer" className = "container">
          <button type = "button" onClick = {this.saveCardsToJson} className = "btn btn-info"> Save </button>
      </div>
    </div>
  );
}
}

export default App;
