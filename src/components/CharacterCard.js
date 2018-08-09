import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/CharacterCard.css'

class CharacterCard extends React.Component{
    render(){
        console.log('props en characterCard',this.props);
        const {image, name, house} = this.props.character;
        return (
            <div className="WrapperCard">
                <img className="ImageCard" src={image} alt={name}/>
                <div className="WrapperText">
                    <h2 className="NameCard"> {name} </h2>
                    <p className="HouseCard"> {house} </p>
                </div>
            </div>
        );
    }
}

CharacterCard.defaultProps = {
    house: 'No pertenece a ninguna casa',
}

export default CharacterCard;