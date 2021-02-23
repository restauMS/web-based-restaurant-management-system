// Dependency Imports
import React from 'react';

// Component Imports
import Login from './WorkerForms/Login/LoginForm';
import Register from './WorkerForms/Register/RegisterForm';

const WorkerView = props => {
    switch(props.ComponentToMount){
        case 'Login':
            return <Login/>
        case 'Register':
            return <Register/>
        default:
            <h1>Something went wrong...</h1>
    }
}

export default WorkerView;