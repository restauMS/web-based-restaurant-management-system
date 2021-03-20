import React, {useState} from 'react';

// Component import
import AdminView from '../../views/Admin/AdminView';

// Styling import
import './style/AdminLayout.scss';

const Auth = localStorage.getItem('AccessToken')!=null;

const AdminLogin = () => {
    return <div className="AdminLayoutContainer">
                <AdminView ComponentToMount="Login"/>
            </div>
    };
    
    const AdminDashboard = () => {
        return <div className="AdminLayoutContainer">
                <AdminView ComponentToMount="Dashboard"/>
            </div>
    };


const AdminServiceRoutes = [
    {
        path: '/Admin/Login',
        component: AdminLogin,
        RouteType: 'authenticator',
        RedirectPath: '/Admin/Dashboard',
        AuthStatus: Auth
    }, 
    {
        path: '/Admin/Dashboard',
        component: AdminDashboard,
        RouteType: 'protected',
        RedirectPath: '/Admin/Login',
        AuthStatus: Auth
    }
]

export default AdminServiceRoutes;
