import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/CharacterCard.css'

class CharacterCard extends React.Component{
    render(){
        // console.log('props en characterCard',this.props);
        // console.log('tipo de dato de character',typeof(this.props.character));
        const {image, name, house} = this.props.character;
        return (
            <div className="WrapperCard">
                <img className="ImageCard" src={image} alt={name}/>
                <div className="WrapperText">
                    <h2 className="NameCard"> {name} </h2>
                    <p className="HouseCard">{!house !== true ? `Casa: ${house}` : 'Casa: Soy un sin techo XD' }</p>
                </div>
            </div>
        );
    }
}

CharacterCard.propTypes = {
    character: PropTypes.object.isRequired,
}

// CharacterCard.defaultProps = {
//     house: 'No pertenece a ninguna casa',
// }

export default CharacterCard;