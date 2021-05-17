import React from 'react';
import { Spring } from 'react-spring/renderprops';

import Label from '../../../../../../common/Label/Label';
import Button from '../../../../../../common/Button/Button';
import { ListCard } from '../../../../../../common/Card/Card';

const Settings = ({Id, Username, Name, Password, Contact, Address}) => {
    return (
        <Spring
        from = {{opacity: 0, transition: '0.1s ease-in-out'}}
        to = {{opacity: 1}}
        >
            {
                props => 
                <div className = "SettingsContainer" style={{...props}}>
                    <div className="TopBar">
                        <Label
                            LabelContent = "Settings"
                            isLabelContrast = {true}
                            Style = {{color: '#E56B6F'}}
                        />
                    </div>
                    <div className="SettingsInfoContainer">
                    <Label
                        LabelContent = "General Information"
                        isLabelContrast = {false}
                        Style = {{fontSize: 'clamp(10px, 20px, 30px)', textAlign: 'start'}}
                    />
                    <div className="InfoContainer">
                        <div className="IdUsername">
                            <ListCard
                                CardContent = {`Account Id: ${Id}`}
                            />
                            <ListCard
                                CardContent = {`Username: ${Username}`}
                            />
                        </div>
                        <ListCard
                            CardContent = {`Name: ${Name}`}
                        />
                        <ListCard
                            CardContent = {`Password: ${Password}`}
                        />
                        <ListCard
                            CardContent = {`Contact #: ${Contact}`}
                        />
                        <ListCard
                            CardContent = {`Address: ${Address}`}
                        />
                    </div>
                    <div className="ButtonGroup">
                            <Button
                                isButtonLink = {false}
                                ButtonContent = "Delete Account"
                                isButtonContrast = {false}
                                ButtonFunction = {() => {
                                    // Function goes here
                                }}
                            />
                            <Button
                                isButtonLink = {false}
                                ButtonContent = "Edit Account"
                                isButtonContrast = {false}
                                ButtonFunction = {() => {
                                    // Function goes here
                                }}
                            />
                        </div>
            </div>
                </div>
            }
        </Spring>
    );
}

export default Settings;
