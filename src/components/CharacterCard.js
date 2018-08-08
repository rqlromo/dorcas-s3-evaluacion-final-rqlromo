import React from 'react';

class CharacterCard extends React.Component{
    render(){
        // console.log('props',this.props);
        const {image, name, house} = this.props;
        return (
            <div>
                <img src={image} alt={name}/>
                <h2> {name} </h2>
                <p> {house} </p>
            </div>
        );
    }
}

export default CharacterCard;