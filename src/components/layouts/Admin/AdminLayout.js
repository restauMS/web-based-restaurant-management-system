import React from 'react';
import { AdminLogin as Login, AdminDashboard as Dashboard} from '../../views/Admin/AdminView';
import './style/AdminLayout.scss';

export const AdminLogin = () => {
    return (
        <div className="AdminLayoutContainer">
            <Login/>
        </div>
    )
}

export const AdminDashboard = () => {
    return (
        <div className="AdminLayoutContainer">
            <Dashboard/>
        </div>
    )
}
