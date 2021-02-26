// Dependency Imports
import React from 'react';

// Component Imports
import WorkerView from '../../views/Worker/WorkerView';

// Component Styling Import
import './style/WorkerLayout.scss';

const WorkerLogin = () => {
    return (
        <div className="WorkerLayoutContainer">
            <WorkerView ComponentToMount = 'Login'/>
        </div>
    )
};
const WorkerRegistration = () => {
    return (
        <div className="WorkerLayoutContainer">
            <WorkerView ComponentToMount = 'Register'/>
        </div>
    )
};

const WorkerServiceRoutes = [
    {
        path: '/Worker/Login',
        component: WorkerLogin
    },
    {
        path: '/Worker/Registration',
        component: WorkerRegistration
    }
]

export default WorkerServiceRoutes;