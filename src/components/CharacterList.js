import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import Filters from './Filters';
import '../stylesheets/CharacterList.css'

class CharacterList extends React.Component{
    constructor(){
        super();
        this.charactersFiltered = this.charactersFiltered.bind(this);
        this.capitalize = this.capitalize.bind(this);
    }

    capitalize(str) {

        str = str.toLowerCase();
        str = str.split(' ');
      
        for (var i = 0; i < str.length; i++) {
          str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
        }
        
        return str.join(' '); 
    }

    charactersFiltered(charact){
        const {filterValue} = this.props;
        // console.log('vamos a ver que pasa',charact.name.toLowerCase());
        return (charact.name.toLowerCase().includes(filterValue) === true) ||(charact.name.toUpperCase().includes(filterValue) === true) || 
        (this.capitalize(charact.name).includes(filterValue) === true) ;
    }
    
    getFilteredList(){
        const {arrayCharacters, filterValue} = this.props;
        console.log('state y props',this.state, this.props);
        return ( !filterValue 
            ? arrayCharacters 
            : arrayCharacters.filter(this.charactersFiltered)
        );
    }

    render(){
        console.log('props now',this.props);
        const {handleChangeInput, handleFocusInput, filterValue} = this.props;

        return (
            <div className="WrapperList">
                <header className="TitleHeader">
                    <h1> harry potter characters </h1>
                </header>
                <Filters 
                    handleChangeInput={handleChangeInput}
                    handleFocusInput={handleFocusInput}
                    filterValue={filterValue}
                />
                <ul className="ListList">
                    {this.getFilteredList().map((character,index)=>
                        <li className="ItemList" key={index}>
                            <Link
                                to={`/${character.id}`}
                            >
                                <CharacterCard
                                    character={character}
                                />
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        ); 
    }
}

export default CharacterList;


// "name": "Harry Potter",
// "species": "human",
// "gender": "male",
// "house": "Gryffindor",
// "dateOfBirth": "31-07-1980",
// "yearOfBirth": 1980,
// "ancestry": "half-blood",
// "eyeColour": "green",
// "hairColour": "black",
// "wand": {
//   "wood": "holly",
//   "core": "phoenix feather",
//   "length": 11
// },
// "patronus": "stag",
// "hogwartsStudent": true,
// "hogwartsStaff": false,
// "actor": "Daniel Radcliffe",
// "alive": true,
// "image": "http://hp-api.herokuapp.com/images/harry.jpg"
// },