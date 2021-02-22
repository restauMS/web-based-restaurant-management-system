// Dependency Imports
import React from 'react';
import {Route, Switch} from 'react-router-dom'
// Component Imports
// import WorkerView from '../../views/Worker/WorkerView';
import Login from '../../views/Worker/WorkerForms/Login/LoginForm';
import Register from '../../views/Worker/WorkerForms/Register/RegisterForm';
// Styling Import
import './style/WorkerLayout.scss';

const WorkerLayout = ({match}) => {
    return (
            <Switch>
                {/* <Route path = {`${match.url} + /login`}>
                    <WorkerView
                        ComponentToMount = 'Login'
                    />
                </Route>
                <Route path = {`${match.url} + /register`}>
                    <WorkerView
                        ComponentToMount = 'Register'
                    />
                </Route> */}
                <Route path = {`${match.url} + /login`} component = {Login}/>
                <Route path = {`${match.url} + /register`} component = {Register}/>
            </Switch>
    )
}

export default WorkerLayout;