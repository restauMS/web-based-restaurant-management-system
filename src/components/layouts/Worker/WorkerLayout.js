// Dependency Imports
import React from 'react';

// Component Imports
import WorkerView from '../../views/Worker/WorkerView';

// Component Styling Import
import './style/WorkerLayout.scss';

// Login component for authenticating users
const WorkerLogin = () => {
    return (
        <div className="WorkerLayoutContainer">
            <WorkerView ComponentToMount = 'Login'/>
        </div>
    )
};

// Registration component for adding Workers into the system
const WorkerRegistration = () => {
    return (
        <div className="WorkerLayoutContainer">
            <WorkerView ComponentToMount = 'Register'/>
        </div>
    )
};

// Dashboard component for viewing critical information
const WorkerDashboard = () => {
    return (
        <div className="WorkerLayoutContainer">
            <h1>Not available yet...</h1>
        </div>
    )
}

const WorkerServiceRoutes = [
    {
        path: '/Worker/Login',
        component: WorkerLogin,
        RouteType: 'authenticator',
        RedirectPath: '/Worker/Dashboard'
    },
    {
        path: '/Worker/Registration',
        component: WorkerRegistration,
        RouteType: 'public'
    },
    {
        path: '/Worker/Dashboard',
        component: WorkerDashboard,
        RouteType: 'protected',
        RedirectPath: '/Worker/Login'
    }
]

export default WorkerServiceRoutes;