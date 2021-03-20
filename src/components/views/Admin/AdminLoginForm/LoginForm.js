import React, {useState} from 'react';

// Component Imports
import LoginButton from '../../../common/Button/Button';
import LoginLabel from '../../../common/Label/Label';
import LoginInput from '../../../common/Textfield/Textfield';
import AlertCard from '../../../common/Card/Card';

// Styling import
import './style/LoginForm.scss';

// Asset Imports
import Logo from '../../../../assets/restoms-logo/logo.png';

const Login = () => {
    // ? Subject to change
    const [Username, SetUsername] = useState('');
    const [Password, SetPassword] = useState('');
    const [AuthState, SetAuthState] = useState(false); 
    
    // ! Testing phase subject for Refactoring
    const Authenticate = async() => {
        try {
            const Auth = await fetch('/API/Admin/Authenticate', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    "Username": Username,
                    "Password": Password
                })
            });
            return Auth.json();
        } catch (error) {
            console.trace('Something went wrong', error);
        }
    }

    const Verify = () => {
        try {
            Authenticate()
            .then(({AccessToken, Username: Name, Status}) => {
                localStorage.setItem("AccessToken", AccessToken);
                localStorage.setItem("Username", Name);
                SetAuthState(Status);
            })
            .catch(Error => console.trace(Error));    
        } catch (error) {
            // ? Subject to change
            alert(error);
        }
    }

    return (
        <form 
        className="LoginContainer"
        onChange={e => {e.preventDefault()}} 
        >
            {
                AuthState ? 
                <AlertCard
                    AlertTitle = 'Login is successful!'
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
                    isButtonLink = {true}
                    isButtonContrast = {false}
                    ButtonContent = 'LOGIN'
                    ButtonLinkRoute = '/Admin/Dashboard'
                    ButtonFunction = {(e) => {
                        e.preventDefault();
                        Verify();
                    }}
                />
            </div>
        </form>
    )
}

export default Login;