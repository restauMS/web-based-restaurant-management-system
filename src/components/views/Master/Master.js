import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import MasterRoutes from './MasterRoutes';
import { AuthProvider } from '../../contexts/AuthContext';
import RoutesWithSubRoutes from '../../routers/RoutesWithSubRoutes';

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