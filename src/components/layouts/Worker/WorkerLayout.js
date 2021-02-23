// Dependency Imports
import React from 'react';
import { Route , Switch } from 'react-router-dom';

// Component Imports
import WorkerView from '../../views/Worker/WorkerView';

// Component Styling Import
import './style/WorkerLayout.scss';

const WorkerLayout = ({match}) => {
    return (
        <div className="WorkerLayoutContainer">       
            <Switch>
                <Route
                path = {match.url + '/Login'}
                >
                    <WorkerView
                    ComponentToMount = 'Login'
                    />
                </Route>
                <Route
                path = {match.url + '/Register'}
                >
                    <WorkerView
                    ComponentToMount = 'Register'
                    />
                </Route>
            </Switch>
        </div>
    )
}

export default WorkerLayout;