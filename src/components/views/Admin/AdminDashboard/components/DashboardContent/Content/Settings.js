import React, { useContext , useState } from 'react';
import { Spring } from 'react-spring/renderprops';
import { AuthContext } from '../../../../../../contexts/AuthContext';
import Button from '../../../../../../common/Button/Button';
import { ListCard } from '../../../../../../common/Card/Card';
import { EditSettingInfoModal as EditModal } from '../../../../../../common/Modals/Modal';
import Label from '../../../../../../common/Label/Label';
import '../style/Content.scss';

const Settings = ({Id, Username, Name, Password, Contact, Address}) => {

    const {LogOff} = useContext(AuthContext);

    const [ ModalActive, SetModalActive ] = useState(false);
    const [ ModalType, SetModalType ] = useState('');

    return (
        <Spring
        from = {{opacity: 0, transition: '0.1s ease-in-out'}}
        to = {{opacity: 1}}
        >
            {
                props => 
                <div className = "SettingsContainer" style = {{...props}}>
                    {
                        ModalActive ? 
                        <EditModal 
                            InfoEditable = {ModalType}
                            isModalContrast  = {false}
                            SetModalActive = {SetModalActive}
                            SetModalType = {SetModalType}
                        /> 
                            : 
                        null
                    }
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
                                        CardFunction = {() => {
                                            SetModalType('Username');
                                            SetModalActive(true);
                                        }}
                                    />
                                </div>
                                <ListCard
                                    CardContent = {`Name: ${Name}`}
                                    CardFunction = {() => {
                                        SetModalType('Fullname');
                                        SetModalActive(true);
                                    }}
                                />
                                <ListCard
                                    CardContent = {`Password: ${Password}`}
                                    CardFunction = {() => {
                                        SetModalType('Password');
                                        SetModalActive(true);
                                    }}
                                />
                                <ListCard
                                    CardContent = {`Contact #: ${Contact}`}
                                    CardFunction = {() => {
                                        SetModalType('Contact');
                                        SetModalActive(true);
                                    }}
                                />
                                <ListCard
                                    CardContent = {`Address: ${Address}`}
                                    CardFunction = {() => {
                                        SetModalType('Address');
                                        SetModalActive(true);
                                    }}
                                />
                            </div>
                            <div className="ButtonGroup">
                                    <Button
                                        isButtonLink = {false}
                                        ButtonContent = "Delete Account"
                                        isButtonContrast = {true}
                                        ButtonFunction = {() => {
                                            LogOff();
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
