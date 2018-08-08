import React from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component{
    render(){
        // console.log('props',this.props);
        const {arrayCharacters, arrayCharactersFiltered} = this.props;
        console.log(arrayCharactersFiltered);

        if(arrayCharactersFiltered.length === 0){
            return (
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
            ); 
        } else {
            return (
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