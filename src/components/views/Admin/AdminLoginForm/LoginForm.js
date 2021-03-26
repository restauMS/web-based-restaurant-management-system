import React, {useState} from 'react';

// Component Imports
import LoginButton from '../../../common/Button/Button';
import LoginLabel from '../../../common/Label/Label';
import LoginInput from '../../../common/Textfield/Textfield';
// import AlertCard from '../../../common/Card/Card';

// Styling import
import './style/LoginForm.scss';

// Asset Imports
import Logo from '../../../../assets/restoms-logo/logo.png';

const Login = ({SetAuthStatus}) => {
    // ? Subject to change
    const [Username, SetUsername] = useState('');
    const [Password, SetPassword] = useState('');
    
    // ! Testing phase subject for Refactoring
    const Authenticate = async (Credentials) => {
        try {
            const Auth = await fetch('/API/Admin/Authenticate', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(Credentials)
            });
            return Auth.json();
        } catch (error) {
            console.trace('Something went wrong', error);
        }
    }

    const SubmitHandler = async (e) => {
        e.preventDefault();
        const {AccessToken, Username: Name, Status} = await Authenticate({
            'Username': Username,
            'Password': Password
        });
        localStorage.setItem("AccessToken", AccessToken);
        localStorage.setItem("Username", Name);
        SetAuthStatus(Status);
        // ! Really retarded... but last resort method
        // ? Why? It goes against the tech we're using...
        // window.location.replace('/Admin/Dashboard');
    }

    return (
        <form 
        className="LoginContainer"
        onSubmit = {SubmitHandler}
        >
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
                    Type = 'submit'
                />
            </div>
        </form>
    )
}

export default Login;