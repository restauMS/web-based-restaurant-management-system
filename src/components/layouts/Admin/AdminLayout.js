import React from 'react';


// Component import
import AdminView from '../../views/Admin/AdminView';

// Styling import
import './style/AdminLayout.scss';

const AdminLogin = () => {
    return (
            <div className="AdminLayoutContainer">
                <AdminView ComponentToMount="Login"/>
            </div>
            );
};
    
const AdminDashboard = () => {
    return (
            <div className="AdminLayoutContainer">
                <AdminView ComponentToMount="Dashboard"/>
            </div>
            );
};

const AdminServiceRoutes = [
    {
        path: '/Admin/Login',
        component: AdminLogin,
        RouteType: 'authenticator',
        RedirectPath: '/Admin/Dashboard',
    }
    ,{
            path: '/Admin/Dashboard',
            component: AdminDashboard,
            RouteType: 'protected',
            RedirectPath: '/Admin/Login',
        
    },
    {
        path: '/Admin/Dashboard/Transactions',
        component: () => <h1>Transaction page here</h1>,
        RouteType: 'protected',
        RedirectPath: '/Admin/Login'
    },
    {
        path: '/Admin/Dashboard/Inventory',
        component: () => <h1>Inventory page</h1>,
        RouteType: 'protected',
        RedirectPath: '/Admin/Login'
    }
    ,
    {
        path: '/Admin/Dashboard/Settings',
        component: () => <h1>Settings page</h1>,
        RouteType: 'protected',
        RedirectPath: '/Admin/Login'
    }
]
export default AdminServiceRoutes;
