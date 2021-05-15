import React from 'react';
import Button from '../../../../../../common/Button/Button';
import { ListCard } from '../../../../../../common/Card/Card';
import Label from '../../../../../../common/Label/Label';
import '../style/Content.scss';

const Settings = ({Id, Username, Name, Password, Contact, Address}) => {
    return (
        <div className = "SettingsContainer">
            <div className="TopBar">
                <Label
                    LabelContent = "Settings"
                    isLabelContrast = {true}
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
                                isButtonContrast = {true}
                                ButtonFunction = {() => {
                                    // Function goes here
                                }}
                            />
                            <Button
                                isButtonLink = {false}
                                ButtonContent = "Edit Account"
                                isButtonContrast = {true}
                                ButtonFunction = {() => {
                                    // Function goes here
                                }}
                            />
                        </div>
            </div>
        </div>
    );
};

export default Settings;
