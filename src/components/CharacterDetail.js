import React from 'react';
import { Link } from 'react-router-dom';
import calavera from '../images/calavera-skull.jpg';

class CharacterDetail extends React.Component{
    render(){
        // console.log('props characterDetails',this.props.characterRoute);
        const {image, name, house, patronus, yearOfBirth, alive} = this.props.characterRoute;

        return (
            <div>
                <Link to="/">Back</Link>
                <img src={image} alt={name}/>
                <h2> {name} </h2>
                <ul>
                    <li>{` Casa: ${house}`}</li>
                    <li>{` Año de nacimiento:  ${yearOfBirth} ` }</li>
                    <li>{` Patronus: ${patronus}` }</li>
                    <li>{!!alive? 'Estado: Vivo' : <img src={calavera} alt="calavera"/> }</li>
                </ul>
            </div>
        );
    }
}

export default CharacterDetail;