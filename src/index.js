import React from 'react';
import ReactDOM from 'react-dom';
// Component Styling
import './index.scss';
// Different View Layouts that holds each Service Interface Component
import Customer from './components/layouts/Customer/CustomerLayout';
import Admin from './components/layouts/Admin/AdminLayout';
import Worker from './components/layouts/Worker/WorkerLayout';
import Starter from './components/views/Installation/Installation';
// Root Element of the Application
const RootElement = document.getElementById('root');
// Test Component Render
ReactDOM.render(
    <div className="ContainerIndex">
        <Starter
            CustomerService = {Customer}
            AdminService = {Admin}
            WorkerService = {Worker}
        />
    </div>,
    RootElement
);