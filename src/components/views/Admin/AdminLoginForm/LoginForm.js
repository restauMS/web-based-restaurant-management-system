import React, {useState} from 'react';
// Asset Imports
import Logo from '../../../../assets/restoms-logo/logo.png';

// Component Imports
import LoginButton from '../../../common/Button/Button';
import LoginLabel from '../../../common/Label/Label';
import LoginInput from '../../../common/Textfield/Textfield';
import AlertCard from '../../../common/Card/Card';
// Styling import
import './style/LoginForm.scss';

const Login = props => {

    const [Username, SetUsername] = useState('');
    const [Password, SetPassword] = useState('');
    const [AuthState, SetAuthState] = useState(false);

    const Authenticate = async() => {
        try {
            const Auth = await fetch('./API/Admin/Authenticate', {
                method: 'POST',
                header: {'Content-type': 'application.json'},
                body: JSON.stringify({
                    "Username": Username,
                    "Password": Password
                })
            });
            return Auth.json();
        } catch (error) {
            console.trace(error);
        }
    }

    return (
        <form 
        onChange = {(e) => {e.preventDefault()}}
        className="LoginContainer"
        >
            {
                AuthState ?
                <AlertCard
                AlertTitle = 'Login Successful'
                />
                :
                null
            }
            <div className="FormContainer">
                <img src={Logo} alt="" id="restoms-logo"/>
                <LoginLabel
                    LabelContent = 'Admin Login'
                />
                <LoginInput
                    PlaceholderTitle = 'Username here'
                    HandleChange = {(e) => SetUsername(e.target.value)}
                />
                <LoginInput
                    PlaceholderTitle = 'Password here'
                    HandleChange = {(e) => SetPassword(e.target.value)}
                    Type = 'password'
                />
                <LoginButton
                    isButtonLink = {false}
                    isButtonContrast = {false}
                    ButtonContent = 'LOGIN'
                    ButtonFunction = {(e) => {
                        e.preventDefault();
                        Authenticate()
                        .then(Result => {SetAuthState(true)})
                        .catch(Error => console.trace(Error));
                    }}
                />
            </div>
        </form>
    )
}

export default Login;