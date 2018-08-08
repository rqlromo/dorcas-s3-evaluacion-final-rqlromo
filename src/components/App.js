import React, { Component } from 'react';
import CharacterList from './CharacterList';
import '../stylesheets/App.css';
import Filters from './Filters';

class App extends Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="App">
        <CharacterList/>
        <Filters/>
      </div>
    );
  }

}

export default App;
