import React, {} from 'react';

// Component import
import AdminView from '../../views/Admin/AdminView';

// Styling import
import './style/AdminLayout.scss';

const IsAuthenticated = localStorage.getItem('AccessToken')!=null;

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

// ! Removed Auth prop at layout level for testing...
const AdminServiceRoutes = [
    {
        path: '/Admin/Login',
        component: AdminLogin,
        RouteType: 'authenticator',
        RedirectPath: '/Admin/Dashboard',
        AuthStatus: IsAuthenticated
    }, 
    {
        path: '/Admin/Dashboard',
        component: AdminDashboard,
        RouteType: 'protected',
        RedirectPath: '/Admin/Login',
        AuthStatus: IsAuthenticated
    }
]

export default AdminServiceRoutes;
