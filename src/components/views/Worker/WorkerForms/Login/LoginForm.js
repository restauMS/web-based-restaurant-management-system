import React from 'react';
// Component imports
import Button from '../../../../common/Button/Button';
import LoginLabel from '../../../../common/Label/Label';
import LoginInput from '../../../../common/Textfield/Textfield';
// import AlertCard from  '../../../../common/Card/Card';

// Style import
import './style/LoginForm.scss';

// Asset imports
import Logo from '../../../../../assets/restoms-logo/logo.png';


const Login = () => {

    // ! To be replaced
    // const [Username, SetUsername] = useState('');
    // const [Password, SetPassword] = useState('');
    // const [AuthState, SetAuthState] = useState(false);

    // ! Dog water code
    // const Authenticate = async() => {
    //     try {
    //         const Auth = await fetch('./API/Worker/Authenticate', {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //             body: JSON.stringify({
    //                 "Username": Username,
    //                 "Password": Password
    //             })
    //         });
    //         return Auth.json();
    //     } catch (error) {
    //         console.trace('Something went wrong', error);
    //     }
    // }

    return (
        <form onChange={e => {e.preventDefault()}} className="LoginContainer">
                {/* {
                    AuthState ?
                    <AlertCard
                    AlertTitle = 'Login Successful'
                    />
                    :
                    null
                } */}
            <div className="FormContainer">
                <img src={Logo} alt="" id="restoms-logo"/>
                <LoginLabel
                isLabelContrast = {false}
                LabelContent = 'Worker Login'
                />
                <LoginInput
                PlaceholderTitle = 'Username here'
                // HandleChange = {(e) => SetUsername(e.target.value)}
                />
                <LoginInput
                PlaceholderTitle = 'Password here'
                Type = 'password'
                // HandleChange = {(e) => SetPassword(e.target.value)}
                />
                <Button
                isButtonLink = {false}
                isButtonContrast = {true}
                ButtonContent = 'LOGIN'
                ButtonFunction = {(e) => {
                    e.preventDefault();

                    // ! Absolute dog water piece of code
                    // Authenticate()
                    // .then(Result => Result.length > 0 ? SetAuthState(true) : alert('Massive cuckery for not getting it right.'))
                    // .catch(Error => console.trace(Error))
                }
                }
                />
            </div>
        </form>
    )
}

export default Login;