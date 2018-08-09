import React from 'react';

class Filters extends React.Component{
    render(){
        const {handleChangeInput, handleFocusInput} = this.props;
        // console.log('handleChangeInput Filters',handleChangeInput);
        return (
            <input 
                onChange={handleChangeInput}
                onBlur={handleFocusInput}
                type="text" 
                name="" 
                id="" 
            />
        );
    }
}

export default Filters;