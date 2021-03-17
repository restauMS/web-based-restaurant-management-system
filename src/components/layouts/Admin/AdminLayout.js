import React from 'react';

// Component import
import AdminView from '../../views/Admin/AdminView';
// Styling import
import './style/AdminLayout.scss';

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
        path: '/Admin',
        component: AdminLogin
    },
    {
        path: '/Admin/Login',
        component: AdminLogin
    }, 
    {
        // ! Testing
        path: '/Admin/Dashboard',
        component: AdminDashboard
    }
]

export default AdminServiceRoutes;
