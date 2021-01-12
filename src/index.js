import React from 'react';
import ReactDOM from 'react-dom';
// Component Styling
import './index.scss';
// Different View Layouts components that holds each Service Interface Component
import Customer from './components/layouts/Customer/CustomerLayout';
import Admin from './components/layouts/Admin/AdminLayout';
import Worker from './components/layouts/Worker/WorkerLayout';
import Starter from './components/views/Installation/Installation';
import NotFound from './components/views/NotFound/NotFound';
// Root Element of the Application
const RootElement = document.getElementById('root');
// Test Component Render
ReactDOM.render(
    <div className="ContainerIndex">
        <Starter
            CustomerService = {Customer}
            AdminService = {Admin}
            WorkerService = {Worker}
            NotFound = {NotFound}
        />
    </div>,
    RootElement
);