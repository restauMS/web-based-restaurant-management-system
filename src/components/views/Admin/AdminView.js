import React from 'react';

// Component Imports
import Login from './AdminLoginForm/LoginForm';
import Dashboard from './AdminDashboard/AdminDashboard';

export const AdminLogin = () => {
    return (
        <Login/>
    );
}

export const AdminDashboard = ({routes}) => {
    return (
        <Dashboard
            routes = {routes}
        />
    );
}


