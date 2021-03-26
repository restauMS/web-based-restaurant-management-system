import React from 'react';

// Component Imports
import Login from './AdminLoginForm/LoginForm';
import Dashboard from './AdminDashboard/AdminDashboard';

const AdminView = props => {
    switch(props.ComponentToMount){
        case 'Login': {
            return <Login SetAuthStatus={props.SetAuthStatus}/>
        }
        case 'Dashboard': {
            return <Dashboard/>
        }
        default:
            <h1>
                Something went horribly wrong!
            </h1>
    }
}

export default AdminView;