import React from 'react';

// Asset Imports
import Logo from '../../../../assets/restoms-logo/logo.png';
// Component Imports
import LoginButton from '../../../common/Button/Button';
import LoginLabel from '../../../common/Label/Label';
import LoginInput from '../../../common/Textfield/Textfield';
// Styling import
import './style/LoginForm.scss';
const Login = props => {
    return (
        <form 
        action="" 
        className="LoginContainer"
        >
            <div className="FormContainer">
                <img src={Logo} alt="" id="restoms-logo"/>
                <LoginLabel
                    LabelContent = 'Admin Login'
                />
                <LoginInput
                    PlaceholderTitle = 'Username here'
                />
                <LoginInput
                    PlaceholderTitle = 'Password here'
                    Type = 'password'
                />
                <LoginButton
                    isButtonLink = {false}
                    isButtonContrast = {false}
                    ButtonContent = 'LOGIN'
                />
            </div>
        </form>
    )
}

export default Login;