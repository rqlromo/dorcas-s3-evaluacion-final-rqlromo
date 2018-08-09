import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterList from './CharacterList';
import CharacterDetail from './CharacterDetail';
import '../stylesheets/App.css';


class App extends Component {
  constructor(){
    super();

    this.state = {
      characters: [],
      filterValue: null,
    };

    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.getCharacter = this.getCharacter.bind(this);
  }

  componentDidMount(){
    this.callFetch()
  }

  callFetch(){
    const url = 'http://hp-api.herokuapp.com/api/characters';
    fetch(url)
    .then((response)=>response.json())
    .then((json) => {
      let charactersConId = [];
      
      for (let i=0; i<json.length; i++) {
        charactersConId[i] = {
          ...json[i],
          id: i
        }
      }

      this.setState({
        characters: charactersConId,
      }
      ,
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
      console.log('this.state.filterValue valor actualizado:',this.state.filterValue)
      // console.log('nombre del primer caracter',this.state.characters[0].name);
      // console.log('lo incluye o no lo incluye',this.state.characters[0].name.includes(this.state.filterValue));
      // this.state.characters.map((character)=>{
      //   if(character.name.includes(this.state.filterValue) === true){
      //     const characterName = character.name;
      //     this.setState({
      //       filteredCharacters: [...this.state.filteredCharacters, characterName]
      //     })
      //     console.log('array de personas que coinciden?',this.state.filteredCharacters)
      //   } 
      // })
    });
  }
  


  getCharacter(id) {
    const { characters } = this.state;
    // console.log('id',id);
    return characters.find(characterFind => characterFind.id === parseInt(id));
  }

  render() {
    const {characters, filterValue} = this.state;
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
          
            <Switch>
              <Route
                exact
                path='/'
                render={({ match, history, location }) =>
                  <CharacterList 
                    match={match}
                    location={location}
                    history={history}
                    arrayCharacters={characters} 
                    filterValue={filterValue}
                    handleChangeInput = {this.handleChangeInput}
                  />
                }
              />
              <Route
                path='/:id'
                render={(props) =>
                  <CharacterDetail {...props}
                  characterRoute={this.getCharacter(props.match.params.id)}
                  />
                }
              />
          </Switch>
          </main>
        </div>
      );
    }
  }

}

export default App;
