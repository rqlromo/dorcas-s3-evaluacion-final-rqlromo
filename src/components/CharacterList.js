import React from 'react';
import { Link} from 'react-router-dom';
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