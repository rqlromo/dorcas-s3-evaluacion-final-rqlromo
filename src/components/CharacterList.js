import React from 'react';
import CharacterCard from './CharacterCard';

class CharacterList extends React.Component{
    render(){
        console.log('props',this.props);
        const {arrayCharacters} = this.props;
        return (
            <ul>
                {arrayCharacters.map((character,index)=>
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

export default CharacterList;