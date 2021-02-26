// Dependency Imports
import React from 'react'

// Component Imports
import WDLabel from '../../../common/Label/Label';
import WDButton from '../../../common/Button/Button';

// Asset imports
import Logo from '../../../../assets/restoms-logo/logo.png';

// Component styling Import
import './style/WorkerDashboard.scss';

const WorkerDashboard = () => {
    return (
        <div className="DashboardContainer">
            <nav className="DashboardNavigation">
                <div className="NavigationContent">
                    <img src={Logo} alt="RestoMS Logo"/>
                    <WDButton
                        isButtonLink = {false} // Atleast for now
                        ButtonContent = 'Button 1'
                        isButtonContrast = {false}
                    />
                    <WDButton
                        isButtonLink = {false} // Atleast for now
                        ButtonContent = 'Button 2'
                        isButtonContrast = {false}
                    />
                    <WDButton
                        isButtonLink = {false} // Atleast for now
                        ButtonContent = 'Button 3'
                        isButtonContrast = {false}
                    />
                    <WDButton
                        isButtonLink = {false} // Atleast for now
                        ButtonContent = 'Button 4'
                        isButtonContrast = {false}
                    />
                </div>
            </nav>
            <div className="ContentContainer">
                <WDLabel
                    isLabelContrast = {true}
                    LabelContent = 'The quick brown fox jumps over the lazy dog'
                />
            </div>
        </div>
    )
}

export default WorkerDashboard;