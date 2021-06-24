import React from 'react';

// ? Component imports
import RegisterButton from '../../../../common/Button/Button';
import RegisterLabel from '../../../../common/Label/Label';
import RegisterInput from '../../../../common/Textfield/Textfield';

// ? Style import
import './style/RegisterForm.scss';

// ? Asset import
import Logo from '../../../../../assets/restoms-logo/logo.png'

const Register = props => {
    return (
        <form action="" className="RegisterContainer">
            <div className="FormContainer">
        	    <img src={Logo} alt="" id="restoms-logo"/>
                <RegisterLabel
                    LabelContent = "Worker Registration"
                />
                <RegisterInput
                PlaceholderTitle = 'Enter username'
                />
                <RegisterInput
                PlaceholderTitle = 'Enter password'
                Type = 'password'
                />
                <RegisterInput
                PlaceholderTitle = 'Enter mobile #'
                />
                <RegisterInput
                PlaceholderTitle = 'Enter address'
                />
                <RegisterButton
                isButtonLink = {false}
                isButtonContrast = {true}
                ButtonContent = 'REGISTER'
                />
            </div>
        </form>
    )
}

export default Register;