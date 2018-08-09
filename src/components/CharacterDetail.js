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
            <div className="SuperWrapDetail">
                <Link className="LinkBack" to="/">Back</Link>
                <div className="WrapperDetail">
                    <div className="boxImageDetail">
                        <img className="ImageDetail" src={image} alt={name}/>
                    </div>
                    <div className="boxTextDetail">
                        <h2 className="TitleDetail"> {name} </h2>
                        <ul className="ListDetail">
                            <li className="ListItemDetail">{` Casa: ${house}`}</li>
                            <li className="ListItemDetail">{` Año de nacimiento:  ${yearOfBirth} ` }</li>
                            <li className="ListItemDetail">{` Patronus: ${patronus}` }</li>
                            <li className="ListItemDetail">{!!alive ? 'Estado: Vivo' : <img className="ImageAlive" src={calavera} alt="calavera"/> }</li>
                        </ul>
                    </div>
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