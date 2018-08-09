import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CharacterCard from './CharacterCard';
import Filters from './Filters';

class CharacterList extends React.Component{
    constructor(){
        super();
        this.charactersFiltered = this.charactersFiltered.bind(this);
    }

    charactersFiltered(charact){
        const {filterValue} = this.props;
        // console.log('vamos a ver que pasa',charact.name.toLowerCase());
        return (charact.name.toLowerCase().includes(filterValue) === true) ||(charact.name.toUpperCase().includes(filterValue) === true)  ;
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
            <div>
                <Filters 
                    handleChangeInput={handleChangeInput}
                    handleFocusInput={handleFocusInput}
                    filterValue={filterValue}
                />
                <ul>
                    {this.getFilteredList().map((character,index)=>
                        <li key={index}>
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