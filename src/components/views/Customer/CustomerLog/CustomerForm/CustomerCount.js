import React , { useContext } from 'react'
import { CustomerContext } from '../../../../contexts/CustomerContext';
import CustomerLabel from '../../../../common/Label/Label';
import CustomerButton from '../../../../common/Button/Button';

const CustomerCount = () => {

    const { PageCount , _NextPage, SetCount } = useContext(CustomerContext);

    return (
        <div
            style = {{
                display: 'flex',
                flexFlow: 'column'
            }}
        >
            <CustomerLabel
                LabelContent={`How are you doing, ${}!`}
                isLabelContrast={false}
            />
            <div style = {{
                display: 'flex',
                flexFlow: 'row',
                margin: 'auto'
            }}>
                <CustomerButton
                    isButtonLink = {false}
                    isButtonContrast = {true}
                    ButtonContent = 'Group'
                    Style = {{margin: 'auto 15px'}}
                    ButtonFunction = {() => {
                        _NextPage();
                        SetCount('Group');
                    }} 
                />
                <CustomerButton
                    isButtonLink = {false}
                    isButtonContrast = {true}
                    ButtonContent = 'Solo'
                    Style = {{margin: 'auto 15px'}}
                    ButtonFunction = {() => {
                        _NextPage();
                        SetCount('Solo');
                    }} 
                />                
            </div>
        </div>
    )
}

export default CustomerCount
