import React from 'react';

class Filters extends React.Component{
    render(){
        const {handleChangeInput} = this.props;
        console.log('handleChangeInput Filters',handleChangeInput);
        return (
            <input onChange={handleChangeInput} type="text" name="" id="" />
        );
    }
}

export default Filters;