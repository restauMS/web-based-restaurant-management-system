import React from 'react';
// ? Needed later on
// import {BrowserRouter as Router} from 'react-router-dom';

// Component Imports
import ADButton from '../../../common/Button/Button';
import ADLabel from '../../../common/Label/Label';
import ADInput from '../../../common/Textfield/Textfield';

// Asset Imports
import Logo from '../../../../assets/restoms-logo/logo.png';

// Styling Import
import './style/AdminDashboard.scss';

const Dashboard = props => {
    return (
        <div className='DashboardContainer'>
            <nav className='DashboardNavigation'>
                <div className="NavigationContent">
                    <img src={Logo} alt="The RestoMS Logo"/>
                    <ADButton
                        isButtonLink = {false} // Atleast for now
                        ButtonContent = 'Button 1'
                        isButtonContrast = {true}
                    />
                    <ADButton
                        isButtonLink = {false} // Atleast for now
                        ButtonContent = 'Button 2'
                        isButtonContrast = {true}
                    />
                    <ADButton
                        isButtonLink = {false} // Atleast for now
                        ButtonContent = 'Button 3'
                        isButtonContrast = {true}
                    />
                    <ADButton
                        isButtonLink = {false} // Atleast for now
                        ButtonContent = 'Button 4'
                        isButtonContrast = {true}
                    />
                </div>
            </nav>
            <div className="ContentContainer">
                <ADLabel
                isLabelContrast = {true}
                LabelContent = 'Test'
                />
            </div>
        </div>
    );
}

export default Dashboard;
