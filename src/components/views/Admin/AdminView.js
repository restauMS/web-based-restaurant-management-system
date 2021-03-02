import React from 'react';

// Component Imports
import Login from './AdminLoginForm/LoginForm';
import Dashboard from './AdminDashboard/AdminDashboard';

const AdminView = props => {
    switch(props.ComponentToMount){
        case 'Login': {
            return <Login/>
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