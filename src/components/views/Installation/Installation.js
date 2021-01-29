import React from 'react';
import { Spring } from 'react-spring/renderprops';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
// Component Imports
import LinkButton from '../../common/Button/Button';
import Label from '../../common/Label/Label';
// Asset Imports
import RestoMSLogo from '../../../assets/restoms-logo/logo.png';
import './style/Installation.scss';




const Selection = () => {
    return (
        <Spring
        from = {{opacity: 0, transition: '0.1s ease-in-out'}}
        to = {{opacity: 1}}
        >
            {props => 
                <div className='Installation' style={{...props}}>
                    <div className="SelectContainer">
                        <img src={RestoMSLogo} alt="RestoMS Logo" id="restoms-logo"/>
                        <Label
                            LabelContent = {`Service Menu`}
                        />
                        <LinkButton
                            isButtonLink = {true}
                            ButtonContent = 'Customer'
                            isButtonContrast = {true}
                            ButtonLinkRoute = '/customer'
                        />
                        <LinkButton
                            isButtonLink = {true}
                            ButtonContent = 'Admin'
                            isButtonContrast = {true}
                            ButtonLinkRoute = '/admin'
                        />
                        <LinkButton
                            isButtonLink = {true}
                            ButtonContent = 'Worker'
                            isButtonContrast = {true}
                            ButtonLinkRoute = '/worker'
                        />
                    </div>
                </div>
            }
        </Spring>
    )
}

/**
 * @param {Component} props.CustomerService 
 * To render Customer view service that is intended for Customers
 * @param {Component} props.AdminService
 * To render Admin view service intended for the Admin
 * @param {Component} props.WorkerService
 * To render Worker view service inteded for the Workers
 */
const Installation = props =>{
return (
    <Router>
            <Switch>
                <Route exact path = '/' component={Selection}/>
                <Route exact path = '/customer' component={props.CustomerService}/>
                <Route exact path = '/admin' component={props.AdminService}/>
                <Route exact path='/worker' component={props.WorkerService}/>
                <Route exact path='/404' component={props.NotFound}/>
                <Redirect to='/404'/>
            </Switch>
    </Router>
);
}

export default Installation;