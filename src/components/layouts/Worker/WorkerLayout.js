// Dependency Imports
import React from 'react';

// Component Imports
import {WorkerLogin as Login, WorkerRegistration as Registration} from '../../views/Worker/WorkerView';

// Component Styling Import
import './style/WorkerLayout.scss';

// Login component for authenticating users
export const WorkerLogin = () => {
    return (
        <div className="WorkerLayoutContainer">
            <Login/>
        </div>
    )
};

// Registration component for adding Workers into the system
export const WorkerRegistration = () => {
    return (
        <div className="WorkerLayoutContainer">
            <Registration/>
        </div>
    )
};

// Dashboard component for viewing critical information
export const WorkerDashboard = () => {
    return (
        <div className="WorkerLayoutContainer">
            <h1>Not available yet...</h1>
        </div>
    )
}
