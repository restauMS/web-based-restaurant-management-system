// ! The installation component will only be for the Client devices and is for **TESTING ONLY!**
import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import './style/Installation.scss';

/**
 * 
 * @param {Component} props.CustomerService 
 * To render Customer view service that is intended for Customers
 * @param {Component} props.AdminService
 * To render Cu
 * @param {Component} props.WorkerService
 */
const Installation = props =>{
return (
    <Router>
        <div className="Installation">
            <ul>
                <li>
                <Route path = '/customer'>
                    {props.CustomerService}
                </Route>
                </li>
                <li>
                    <Redirect to = '/admin'>
                        Admin
                    </Redirect>
                </li>
                <li>
                    <Redirect to = '/worker'>
                        Worker
                    </Redirect>
                </li>
            </ul>
            {/* <Switch>
                <Route path = '/customer'>
                    {props.CustomerService}
                </Route>
                <Route path = '/admin'>
                    {props.AdminService}
                </Route>
                <Route path='/worker'>
                    {props.WorkerService}
                </Route>
            </Switch> */}
        </div>
    </Router>
);
}

export default Installation;