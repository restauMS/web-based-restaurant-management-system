import React from 'react';
import './style/Button.scss';

const Button = props => {
    return (
        <button 
        onClick={props.ButtonFunction}
        className={props.isButtonContrast ? 'Button ButtonContrast' : 'Button'}
        style = {props.Style}
        >
            {props.ButtonContent}
        </button>
    )
}

export default Button;