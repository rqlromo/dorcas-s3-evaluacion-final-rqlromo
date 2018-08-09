import React from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import Filters from './Filters';

class CharacterList extends React.Component{
    render(){
        console.log('props now',this.props);
        const {arrayCharacters, arrayCharactersFiltered ,handleChangeInput} = this.props;
        console.log(arrayCharactersFiltered);

        if(arrayCharactersFiltered.length === 0){
            return (
                <div>
                    <Filters handleChangeInput={handleChangeInput}/>
                    <ul>
                        {arrayCharacters.map((character,index)=>
                            <li key={index}>
                                <Link
                                    to={`/${character.id}`}
                                >
                                    <CharacterCard
                                        image = {character.image}
                                        name = {character.name}
                                        house = {character.house}
                                        patronus = {character.house}
                                        yearOfBirth = {character.yearOfBirth}
                                        alive = {character.alive}
                                    />
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            ); 
        } else {
            return (
                <div>
                    <Filters handleChangeInput={handleChangeInput}/>
                    <ul>
                        {arrayCharactersFiltered.map((character,index)=>
                            <li key={index}>
                                <CharacterCard
                                    image = {character.image}
                                    name = {character.name}
                                    house = {character.house}
                                />
                            </li>
                        )}
                    </ul>
                </div>
            );
        }
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