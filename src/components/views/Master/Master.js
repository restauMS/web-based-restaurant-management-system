import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import MasterRoutes from './MasterRoutes';
import { AuthProvider } from '../../contexts/AuthContext';
import RoutesWithSubRoutes from '../../routers/RoutesWithSubRoutes';

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
                        {
                            MasterRoutes.map((routes, key) => (
                                <RoutesWithSubRoutes
                                    key = {key}
                                    {...routes}
                                />
                            ))
                        }
                        <Redirect to='/404'/>
                    </Switch>
            </Router>
        </AuthProvider>    
    );
}

export default Master;