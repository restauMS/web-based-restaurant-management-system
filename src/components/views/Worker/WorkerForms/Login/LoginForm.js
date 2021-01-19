import React from 'react';


// Component imports
import LoginButton from '../../../../common/Button/Button';
import LoginLabel from '../../../../common/Label/Label';
import LoginInput from '../../../../common/Textfield/Textfield';
// Style import
import './style/LoginForm.scss';
// Asset imports
import Logo from '../../../../../assets/restoms-logo/logo.png';
const Login = () => {
    return (
        <form action="" className="LoginContainer">
            <div className="FormContainer">
                <img src={Logo} alt="" id="restoms-logo"/>
                <LoginLabel
                isLabelContrast = {false}
                LabelContent = 'Worker Login'
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
                isButtonContrast = {true}
                ButtonContent = 'LOGIN'
                />
            </div>
        </form>
    )
}

export default Login;