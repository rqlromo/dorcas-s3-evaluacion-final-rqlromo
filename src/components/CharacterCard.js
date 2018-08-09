import React from 'react';
import PropTypes from 'prop-types';

class CharacterCard extends React.Component{
    render(){
        console.log('props en characterCard',this.props);
        const {image, name, house} = this.props.character;
        return (
            <div>
                <img src={image} alt={name}/>
                <h2> {name} </h2>
                <p> {house} </p>
            </div>
        );
    }
}

CharacterCard.defaultProps = {
    patronus: 'No tiene patronus',
    house: 'No pertenece a ninguna casa',
}

export default CharacterCard;