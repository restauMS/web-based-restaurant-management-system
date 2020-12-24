import React from 'react';
import './style/Textfield.scss';

const Textfield = props => {
    return (
        <input 
        type={props.Type} 
        className="Textfield" 
        placeholder={props.PlaceholderTitle}
        onChange = {props.HandleChange}
        name = {props.Name}
        value = {props.Value}
        />
    )
}

export default Textfield;