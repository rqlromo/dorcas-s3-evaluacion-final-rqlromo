import React, { Component } from 'react';
import CharacterList from './CharacterList';
import '../stylesheets/App.css';
import Filters from './Filters';

class App extends Component {
  constructor(){
    super();

    this.state = {
      characters: [],
      filterValue: '',
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);

  }

  componentDidMount(){
    this.callFetch()
  }

  callFetch(){
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response)=>response.json())
    .then((json) => {
      this.setState({
        characters: json,
      },
      () => {
        console.log('estado actualizado!',this.state);
      })
    });
  }

  handleChangeInput(event){
    this.setState({
      filterValue: event.target.value,
    });
  }

  render() {
    console.log('filterValue',this.state.filterValue)
    if (this.state === null) {
      return (
        <p>Loading</p>
      )
    } else {
      const {characters} = this.state;
      return (
        <div className="App">
          <header>
            <h1> harry potter characters </h1>
          </header>
          <main>
            <Filters handleChangeInput = {this.handleChangeInput}/>
            <CharacterList arrayCharacters={characters}/>
          </main>
        </div>
      );
    }
  }

}

export default App;
