import React from 'react';

class Filters extends React.Component{
    render(){
        const {handleChangeInput, handleFocusInput, filterValue} = this.props;
        // console.log('handleChangeInput Filters',handleChangeInput);
        return (
            <input 
                onChange={handleChangeInput}
                onBlur={handleFocusInput}
                value={filterValue}
                type="text" 
                name="searchCharacters" 
                id="searchCharacters" 
            />
        );
    }
}

export default Filters;