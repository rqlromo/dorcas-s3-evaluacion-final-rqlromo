import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import calavera from '../images/calavera-skull.jpg';
import '../stylesheets/CharacterDetail.css'

class CharacterDetail extends React.Component{
    render(){
        // console.log('props characterDetails',this.props.characterRoute);
        const {image, name, house, patronus, yearOfBirth, alive} = this.props.characterRoute;

        return (
            <div className="WrapperDetail">
                <Link to="/">Back</Link>
                <div className="boxImageDetail">
                    <img className="ImageDetail" src={image} alt={name}/>
                </div>
                <div className="boxTextDetail">
                    <h2> {name} </h2>
                    <ul className="ListDetail">
                        <li>{` Casa: ${house}`}</li>
                        <li>{` Año de nacimiento:  ${yearOfBirth} ` }</li>
                        <li>{` Patronus: ${patronus}` }</li>
                        <li>{!!alive ? 'Estado: Vivo' : <img src={calavera} alt="calavera"/> }</li>
                    </ul>
                </div>
            </div>
        );
    }
}

CharacterDetail.defaultProps = {
    patronus: 'No tiene patronus',
    house: 'No pertenece a ninguna casa',
}


export default CharacterDetail;