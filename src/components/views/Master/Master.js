import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

// Imports needed to use components
import NotFound from '../NotFound/NotFound';
import ServiceMenu from '../ServiceMenu/ServiceMenu';
import ControllerRouter from '../../routers/Controller';
import Customer from '../../layouts/Customer/CustomerLayout';
import Worker from '../../layouts/Worker/WorkerLayout';
import Admin from '../../layouts/Admin/AdminLayout';
import { AuthProvider } from '../../contexts/AuthContext';


/*
? implementation @ master level

export default function RouteConfigExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
        </ul>

        <Switch>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
        </div>
    </Router>
);
}
*/

const Master = () => {
    return (
        <AuthProvider>
            <Router>
                    <Switch>
                        <ControllerRouter
                            path = '/'
                            component = {ServiceMenu}
                            AuthStatus = {false}
                            RouteType = 'public'
                            strict
                            exact
                        />

                        {/* Customer Routes */}
                        {
                            Customer.map(({ path, component, RouteType}, key) => 
                            <ControllerRouter
                                key = {key}
                                path = {path}
                                component = {component}
                                RouteType = {RouteType}
                                AuthStatus = {false}
                                exact
                                strict
                            />    
                            )
                        }
                        
                        {/* Worker Routes */}
                        
                            { 
                                Worker.map(({ path, component, RouteType, RedirectPath }, key) => 
                                <ControllerRouter 
                                    key = {key} 
                                    path = {path}
                                    component = {component}
                                    RouteType = {RouteType}    
                                    RedirectPath = {RedirectPath}
                                    exact
                                    strict
                                />
                                )
                            }

                        {/* Admin Routes */}
                        
                            { 
                                Admin.map(({ path, component, RouteType, RedirectPath }, key) => 
                                <ControllerRouter 
                                    key = {key} 
                                    path = {path} 
                                    component = {component} 
                                    RouteType = {RouteType}
                                    RedirectPath = {RedirectPath}
                                    exact
                                    strict
                                />
                                )
                            }

                        <ControllerRouter
                            path = '/404'
                            component = {NotFound}
                            AuthStatus = {false}
                            RouteType = 'public'
                            strict
                            exact
                        />

                        <Redirect to='/404'/>

                    </Switch>
            </Router>
        </AuthProvider>    
    );
}

export default Master;