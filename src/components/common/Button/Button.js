import React from 'react';
import './style/Button.scss';

const Button = props => {
    return (
        <button 
        style ={props.Style}
        onClick={props.ButtonFunction}
        className={props.isButtonContrast ? 'Button ButtonContrast' : 'Button'}>
            {props.ButtonContent}
        </button>
    )
}

export default Button;