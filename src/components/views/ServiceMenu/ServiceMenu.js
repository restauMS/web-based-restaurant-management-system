// Dependency Imports
import React from 'react'
import { Spring } from 'react-spring/renderprops';

// Component Imports
import LinkButton from '../../common/Button/Button';
import Label from '../../common/Label/Label';

// Asset Imports
import RestoMSLogo from '../../../assets/restoms-logo/logo.png';

// Component Styling Import
import './style/ServiceMenu.scss';

const ServiceMenu = () => {
    return (
        <Spring
            from = {{opacity: 0, transition: '0.1s ease-in-out'}}
            to = {{opacity: 1}}
        >   
            {
                props => 
                <div className="ServiceMenu" style={{...props}}>
                    <div className="SelectContainer">
                        <img src={RestoMSLogo} alt="System Logo" id="restoms-logo"/>
                        <Label
                            LabelContent = 'Service Menu'
                        />
                        <LinkButton
                            isButtonLink = {true}
                            ButtonContent = 'Customer'
                            isButtonContrast = {true}
                            ButtonLinkRoute = '/Customer/Order'
                        />
                        <LinkButton
                            isButtonLink = {true}
                            ButtonContent = 'Admin'
                            isButtonContrast = {true}
                            ButtonLinkRoute = ''
                        />
                        <LinkButton
                            isButtonLink = {true}
                            ButtonContent = 'Worker'
                            isButtonContrast = {true}
                            ButtonLinkRoute = '/Worker/Login'
                        />
                    </div>
                </div>
            }
        </Spring>
    )
}

export default ServiceMenu;