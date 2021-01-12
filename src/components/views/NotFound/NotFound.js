import React from 'react';

// Component Imports
import Label from '../../common/Label/Label';
import Button from '../../common/Button/Button';
// Stylesheet Import
import './style/NotFound.scss';

const NotFound = props => {
    return (
        <div className="NotFound">
            <div className="Info">
                <Label
                LabelContent = 'Sorry, this page does not exist.'
                isLabelContrast = {false}
                />
                <Button
                ButtonContent = 'exit.'
                isButtonContrast = {true}
                isButtonLink = {true}
                ButtonLinkRoute = '/'
                />
            </div>
        </div>
    );
}

export default NotFound;