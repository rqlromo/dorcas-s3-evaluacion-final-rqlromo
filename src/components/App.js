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
      filteredCharacters: [],
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);

  }

  componentDidMount(){
    this.callFetch()
  }

  callFetch(){
    const url = 'http://hp-api.herokuapp.com/api/characters';
    fetch(url)
    .then((response)=>response.json())
    .then((json) => {
      this.setState({
        characters: json,
      },
      () => {
        // console.log('estado actualizado!',this.state);
      })
    });
  }

  handleChangeInput(event){
    this.setState({
      filterValue: event.target.value,
    },
    () => {
      // console.log('valor de this state actualizado',this.state.filterValue)
      // console.log('quiero asegurarme que el tipo de dato es un string',typeof this.state.filterValue);
      // console.log('nombre del primer caracter',this.state.characters)
      // caharacters[0].name.includes(this.state.filterValue.)
    })
    console.log('this.state.filterValue',this.state.filterValue)
    console.log('nombre del primer caracter',this.state.characters[0].name);
    this.state.characters[0].name.includes(this.state.filterValue)
    console.log('lo incluye o no lo incluye',this.state.characters[0].name.includes(this.state.filterValue));
    this.state.characters.map((character)=>{
      if(character.name.includes(this.state.filterValue) === true){
        this.setState({

        })
      } 
    })
  }



  render() {
    const {characters} = this.state;
    // console.log('filterValue',this.state.filterValue)
    if (characters.length === 0) {
      return (
        <p>Loading</p>
      )
    } else {
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
