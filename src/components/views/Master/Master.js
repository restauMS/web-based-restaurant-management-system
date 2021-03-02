// Dependency Imports
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

// Component Imports
import NotFound from '../NotFound/NotFound';
import ServiceMenu from '../ServiceMenu/ServiceMenu';
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
                <Route exact path = '/' strict component={ServiceMenu}/>
                {/* Complete parent and child routes for each service component */}
                { Customer.map(({path, component}, key) => <Route exact strict path = {path} component = {component} key = {key} />)}
                { Worker.map(({path, component}, key) => <Route exact strict path = {path} component = {component} key = {key} />)}
                { Admin.map(({path, component}, key) => <Route exact strict path = {path} component = {component} key = {key} />) }
                <Route exact path='/404' component={NotFound}/>
                <Redirect to='/404'/>
            </Switch>
    </Router>
);
}

export default Master;