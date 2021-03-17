import React from 'react';
import './style/Button.scss';
import {Link, NavLink} from 'react-router-dom';

const Button = props => {
    return (
        props.isButtonLink ? 
            (
                <Link 
                    className={props.isButtonContrast ? 'Button ButtonContrast Link onActive' : 'Button Link onActive'}
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
                className={props.isButtonContrast ? 'Button ButtonContrast onActive' : 'Button onActive'}
                style = {{...props.Style}}
                >
                    {props.ButtonContent}
                </button>
            )
    );
}

export const DashboardButton = props => {
    return (
                <NavLink
                    className={props.isButtonContrast ? 'DashboardButton ButtonContrast onActive' : 'DashboardButton onActive'}
                    activeStyle = {props.activeStyle}
                    to = {props.Route}
                    style = {{...props.Style}}
                >
                    <img 
                        src={props.ButtonImageProps.src} 
                        alt={props.ButtonImageProps.alt} 
                        height={props.ButtonImageProps.height} 
                        width = {props.ButtonImageProps.width}
                    />
                </NavLink>
    );
}

export default Button;