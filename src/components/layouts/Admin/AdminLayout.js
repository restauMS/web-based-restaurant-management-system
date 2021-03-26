import React from 'react';

// Component import
import AdminView from '../../views/Admin/AdminView';
import { useAuth } from '../../hooks/AuthCheck';

// Styling import
import './style/AdminLayout.scss';

const AdminLogin = () => {

    const {SetAuthStatus} = useAuth();

    return <div className="AdminLayoutContainer">
                <AdminView ComponentToMount="Login" SetAuthStatus={SetAuthStatus}/>
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
        RedirectPath: '/Admin/Dashboard'
    }, 
    {
        path: '/Admin/Dashboard',
        component: AdminDashboard,
        RouteType: 'protected',
        RedirectPath: '/Admin/Login'
    }
]

export default AdminServiceRoutes;
