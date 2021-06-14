import React , { useContext } from 'react'
import { CustomerContext } from '../../../../contexts/CustomerContext';
import CustomerLabel from '../../../../common/Label/Label';
import CustomerButton from '../../../../common/Button/Button';

const CustomerCount = () => {

    const { PageCount , _NextPage, SetCount, CustomerName } = useContext(CustomerContext);

    if(PageCount !== 4)
        return null;

    return (
        <div
            style = {{
                display: 'flex',
                flexFlow: 'column'
            }}
        >
            <CustomerLabel
                LabelContent={`How are you doing, ${CustomerName}!`}
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
                    Style = {{margin: 'auto 5px'}}
                    ButtonFunction = {(e) => {
                        e.preventDefault()
                        SetCount('Group');
                        _NextPage();
                    }} 
                />
                <CustomerButton
                    isButtonLink = {false}
                    isButtonContrast = {true}
                    ButtonContent = 'Solo'
                    Style = {{margin: 'auto 5px'}}
                    ButtonFunction = {(e) => {
                        e.preventDefault()
                        SetCount('Solo');
                        _NextPage();
                    }} 
                />                
            </div>
        </div>
    )
}

export default CustomerCount;