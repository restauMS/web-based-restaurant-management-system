import React from 'react';

// Component import
import AdminView from '../../views/Admin/AdminView';
// Styling import
import './style/AdminLayout.scss';

const AdminLayout = () =>{
    return (
        <div className="AdminLayoutContainer">
            <AdminView/>
        </div>
    )
}

export default AdminLayout;