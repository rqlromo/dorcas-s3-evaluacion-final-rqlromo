import React from 'react';

class CharacterDetail extends React.Component{
    render(){
        console.log('props characterDetails',this.props.characterRoute);
        const {image, name, house} = this.props.characterRoute;
        return (
            <div>
                <img src={image} alt={name}/>
                <h2> {name} </h2>
                <p> {house} </p>
            </div>
        );
    }
}

export default CharacterDetail;