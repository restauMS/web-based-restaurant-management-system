// Dependency Imports
import React from 'react';
import ReactDOM from 'react-dom';

// Different View Layouts components that holds each Service Interface Component
import Customer from './components/layouts/Customer/CustomerLayout';
import Admin from './components/layouts/Admin/AdminLayout';
import Worker from './components/layouts/Worker/WorkerLayout';
// Different View Service components that holds each Service Interface Component
import Starter from './components/views/Installation/Installation';
import NotFound from './components/views/NotFound/NotFound';

// Component Styling
import './index.scss';

// Root Element of the Application
const RootElement = document.getElementById('root');

// ! Currently testing the Router for all services to be rendered
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