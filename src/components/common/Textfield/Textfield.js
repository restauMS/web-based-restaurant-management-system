import React from 'react';
import './style/Textfield.scss';

const Textfield = props => {
    return (
        <input 
        type="text" 
        className="Textfield" 
        handleChange={props.ChangeHandler}
        placeholder={props.PlaceholderTitle}/>
    )
}

export default Textfield;