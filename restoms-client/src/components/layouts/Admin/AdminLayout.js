import React from 'react';
import { AdminLogin as Login, AdminDashboard as Dashboard} from '../../views/Admin/AdminView';
import { AdminProvider } from '../../contexts/AdminContext';
import './style/AdminLayout.scss';

export const AdminLogin = () => {
    return (
        <div className="AdminLayoutContainer">
            <Login/>
        </div>
    )
}

export const AdminDashboard = ({routes}) => {
    return (
        <AdminProvider>
            <div className="AdminLayoutContainer">
                <Dashboard
                    routes = {routes}
                />
            </div>
        </AdminProvider>
    )
}
