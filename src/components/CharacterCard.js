import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/CharacterCard.css'

class CharacterCard extends React.Component{
    constructor(props){
        super(props);
        this.handlecallFavourite=this.handlecallFavourite.bind(this);
    }

    handlecallFavourite(){
        const {id} = this.props.character;
        const {handleFovourite} = this.props;
        handleFovourite(id);
    }
    
    render(){
        // console.log('props en characterCard',this.props);
        // console.log('tipo de dato de character',typeof(this.props.character));
        const {image, name, house, favourite} = this.props.character;
        return (
            <div className="WrapperCard" onClick={this.handlecallFavourite}>
                <img className="ImageCard" src={image} alt={name}/>
                <div className="WrapperText">
                    <h2 className="NameCard"> {name} </h2>
                    <p className="HouseCard">{!house !== true ? `Casa: ${house}` : 'Casa: Soy un sin techo XD' }</p>
                    <p className="FavCard">{!favourite !== true ? 'Favorito' : 'No soy favorito' }</p>
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