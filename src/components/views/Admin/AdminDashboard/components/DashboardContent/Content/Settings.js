import React from 'react';
import Button from '../../../../../../common/Button/Button';
import { ListCard } from '../../../../../../common/Card/Card';
import Label from '../../../../../../common/Label/Label';
import '../style/Content.scss';

const Settings = () => {
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
                                CardContent = {`Account Id: ${1}`}
                            />
                            <ListCard
                                CardContent = {`Username: ${localStorage.getItem("Username")}`}
                            />
                        </div>
                        <ListCard
                            CardContent = {`Name: Sean Christian Lozana`}
                        />
                        <ListCard
                            CardContent = {`Password: *******`}
                        />
                        <ListCard
                            CardContent = {`Contact #: 12345678912`}
                        />
                        <ListCard
                            CardContent = {`Address: Bakers field, California`}
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
