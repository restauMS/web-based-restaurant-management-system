import React from 'react';
import { Spring } from 'react-spring/renderprops';
import Login from './AdminLoginForm/LoginForm';
import Dashboard from './AdminDashboard/AdminDashboard';

export const AdminLogin = () => {
    return (
        <Spring
            from = {{opacity: 0, transition: '0.1s ease-in-out'}}
            to = {{opacity: 1}}
        >
            {props => <div style={{...props}}><Login/></div>}
        </Spring>
    );
}

export const AdminDashboard = ({routes}) => {
    return (
        <Spring
            from = {{opacity: 0, transition: '0.1s ease-in-out'}}
            to = {{opacity: 1}}
        >
            {props => <div style={{...props}}><Dashboard routes = {routes}/></div>}
        </Spring>
    );
}


