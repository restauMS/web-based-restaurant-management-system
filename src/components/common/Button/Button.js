import React from 'react';
import './style/Button.scss';
import {Link} from 'react-router-dom';

const Button = props => {
    return (props.isButtonLink ? (
    <Link 
        className={props.isButtonContrast ? 'Button ButtonContrast Link' : 'Button Link'}
        role="button"
        style = {{...props.Style}}
        to={props.ButtonLinkRoute}
        onClick={props.ButtonFunction}
        > 
        {props.ButtonContent}
    </Link>
    )
    :
    (
        <button 
        onClick={props.ButtonFunction}
        className={props.isButtonContrast ? 'Button ButtonContrast' : 'Button'}
        style = {{...props.Style}}
        >
            {props.ButtonContent}
        </button>)
    )
}

export default Button;