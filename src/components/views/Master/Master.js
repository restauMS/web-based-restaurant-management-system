// Dependency Imports
import React from 'react';
import {BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

// Component Imports
import NotFound from '../NotFound/NotFound';
import ServiceMenu from '../ServiceMenu/ServiceMenu';
import ControllerRouter from '../../routers/Controller';
import { useAuth } from '../../hooks/AuthCheck';

// ? Customer Component Import
import Customer from '../../layouts/Customer/CustomerLayout';
// ? Worker Component Import
import Worker from '../../layouts/Worker/WorkerLayout';
// ? Admin Component Import
import Admin from '../../layouts/Admin/AdminLayout';


const Master = () => {

    const {AuthStatus} = useAuth();

return (
    <Router>
            <Switch>
                
                <ControllerRouter
                    path = '/'
                    component = {ServiceMenu}
                    AuthStatus = {AuthStatus}
                    RouteType = 'public'
                    strict
                    exact
                />

                {/* Customer Routes */}
                {
                    Customer.map(({path, component, RouteType}, key) => 
                    <ControllerRouter
                        key = {key}
                        path = {path}
                        component = {component}
                        RouteType = {RouteType}
                        AuthStatus = {AuthStatus}
                        exact
                        strict
                    />    
                    )
                }
                
                {/* Worker Routes */}
                { 
                    Worker.map(({path, component, RouteType, RedirectPath}, key) => 
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
                

                {/* Admin Routes */}
                { 
                    Admin.map(({path, component, RouteType, RedirectPath}, key) => 
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
                    AuthStatus = {AuthStatus}
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