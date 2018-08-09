import React from 'react';
import PropTypes from 'prop-types';
import '../stylesheets/Filter.css'

class Filters extends React.Component{
    render(){
        const {handleChangeInput, handleFocusInput, filterValue} = this.props;
        // console.log('handleChangeInput Filters',handleChangeInput);
        return (
            <input 
                onChange={handleChangeInput}
                onFocus={handleFocusInput}
                value={filterValue}
                type="text" 
                name="searchCharacters" 
                id="searchCharacters"
                className="InputFilter" 
            />
        );
    }
}

export default Filters;