// Dependency Imports
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

// Component Imports
import NotFound from '../NotFound/NotFound';
import ServiceMenu from '../ServiceMenu/ServiceMenu';
// ? Customer Component Imports
import Customer from '../../layouts/Customer/CustomerLayout';
// ? Worker Component Imports
import Worker from '../../layouts/Worker/WorkerLayout';

const Master = () => {
return (
    <Router>
            <Switch>
                <Route exact path = '/' strict component={ServiceMenu}/>
                <Route exact path = '/Customer' strict component={Customer}/>
                <Route exact path = '/Admin' strict component={''}/>
                <Route path='/Worker' strict component={Worker}/>
                <Route exact path='/404' component={NotFound}/>
                <Redirect to='/404'/>
            </Switch>
    </Router>
);
}

export default Master;