import React from 'react';
import './style/Button.scss';

const Button = props => {
    return (
        <button 
        onClick={() => props.buttonFunction}
        className="Button -Contrast">
            {props.ButtonText}
        </button>
    )
}

export default Button;