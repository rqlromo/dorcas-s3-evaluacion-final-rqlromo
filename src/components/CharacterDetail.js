import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import calavera from '../images/calavera-skull.jpg';
import '../stylesheets/CharacterDetail.css'

class CharacterDetail extends React.Component{
    render(){
        // console.log('props characterDetails',this.props.characterRoute);
        const {image, name, house, patronus, yearOfBirth, alive} = this.props.characterRoute;
        console.log('tipo de dato characterRoute',typeof(this.props.characterRoute));

        return (
            <div className="SuperWrapDetail">
                <Link className="LinkBack" to="/">Back</Link>
                <div className="WrapperDetail">
                    <div className="boxImageDetail">
                        <img className="ImageDetail" src={image} alt={name}/>
                    </div>
                    <div className="boxTextDetail">
                        <h2 className="TitleDetail"> {name} </h2>
                        <ul className="ListDetail">
                            <li className="ListItemDetail">{!house !== true ? `Casa: ${house}` : 'Casa: Soy un sin techo XD' }</li>
                            <li className="ListItemDetail">{!yearOfBirth !== true ? `Año de nacimiento: ${yearOfBirth}` : 'Año de nacimiento: No se cuando naci :(' }</li>
                            <li className="ListItemDetail">{!patronus !== true ? `Patronus: ${patronus}` : 'Patronus: No tengo patronus' }</li>
                            <li className="ListItemDetail">{!!alive ? 'Estado: Vivo' : 'Estado: Muerto' }</li>
                            <li className="ListItemDetail">{!!alive ? '' : <img className="ImageAlive" src={calavera} alt="calavera"/> }</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

CharacterDetail.propTypes = {
    characterRoute: PropTypes.object.isRequired,
}

// CharacterDetail.defaultProps = {
//     patronus: 'No tiene patronus',
//     house: 'No pertenece a ninguna casa',
// }


export default CharacterDetail;