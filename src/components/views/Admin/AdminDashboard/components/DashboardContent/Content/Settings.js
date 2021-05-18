import React, { useContext } from 'react';
import { Spring } from 'react-spring/renderprops';
import { AuthContext } from '../../../../../../contexts/AuthContext';
import Button from '../../../../../../common/Button/Button';
import { ListCard } from '../../../../../../common/Card/Card';
import Label from '../../../../../../common/Label/Label';
import LogoutImg from '../../../../../../../assets/button-assets/dashboard-related/logout.png';
import '../style/Content.scss';

const Settings = ({Id, Username, Name, Password, Contact, Address}) => {

    const {LogOff} = useContext(AuthContext);

    return (
        <Spring
        from = {{opacity: 0, transition: '0.1s ease-in-out'}}
        to = {{opacity: 1}}
        >
            {
                props => <div className = "SettingsContainer" style = {{...props}}>
                <div className="TopBar">
                    <Label
                        LabelContent = "Settings"
                        isLabelContrast = {true}
                    />
                    <Button
                        isButtonLink = {false}
                        isButtonContrast = {true}
                        ButtonContent = 'Logout'
                        ButtonFunction = {() => {LogOff()}}
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
            }
        </Spring>
        
    );
};

export default Settings;
