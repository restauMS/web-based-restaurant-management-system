// Dependency Imports
import React from 'react';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

// Component Imports
import NotFound from '../NotFound/NotFound';
import ServiceMenu from '../ServiceMenu/ServiceMenu';
import ControllerRouter from '../../routers/Controller';

// ? Customer Component Import
import Customer from '../../layouts/Customer/CustomerLayout';
// ? Worker Component Import
import Worker from '../../layouts/Worker/WorkerLayout';
// ? Admin Component Import
import Admin from '../../layouts/Admin/AdminLayout';


const Master = () => {
return (
    <Router>
            <Switch>
                <ControllerRouter
                    path = '/'
                    component = {ServiceMenu}
                    // AuthStatus = {false}
                    RouteType = 'public'
                    strict
                    exact
                />
                {/* Complete parent and child routes for each service component */}
                {/* { Customer.map(({path, component}, key) => <Route exact strict path = {path} component = {component} key = {key} />)}
                { Worker.map(({path, component}, key) => <Route exact strict path = {path} component = {component} key = {key} />)} */}
                { 
                    Admin.map(({path, component, RouteType, AuthStatus, RedirectPath}, key) => 
                    <ControllerRouter 
                        key = {key} 
                        path = {path} 
                        component = {component} 
                        RouteType = {RouteType}
                        AuthStatus = {AuthStatus}
                        RedirectPath = {RedirectPath}
                        exact
                        strict
                    />
                    )
                }
                <ControllerRouter
                    path = '/404'
                    component = {NotFound}
                    // AuthStatus = {false}
                    RouteType = 'public'
                    strict
                    exact
                />
                <Redirect to='/404'/>
            </Switch>
    </Router>
);
}

export default Master;