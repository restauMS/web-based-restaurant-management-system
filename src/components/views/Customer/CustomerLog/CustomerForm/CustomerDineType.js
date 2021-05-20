import React , { useContext } from 'react'
import { CustomerContext } from '../../../../contexts/CustomerContext';
import CustomerLabel from '../../../../common/Label/Label';
import CustomerButton from '../../../../common/Button/Button';

const CustomerDineType = () => {

    const { PageCount , _NextPage , SetCustomerDineType , CustomerName} = useContext(CustomerContext);

    if (PageCount !== 3)
        return null;

    return (
        <div style = {{
            display: 'flex',
            flexFlow: 'column'
        }}>
            <CustomerLabel
                LabelContent={`Hello, ${CustomerName}!`}
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
                    ButtonContent = 'Takeout'
                    ButtonFunction = {(e) => {
                        e.preventDefault();
                        SetCustomerDineType('Takeout');
                        _NextPage();
                    }}
                    Style = {{margin: 'auto 15px'}}
                />
                <CustomerButton
                    isButtonLink = {false}
                    isButtonContrast = {true}
                    ButtonContent = 'Dine-In'
                    ButtonFunction = {(e) => {
                        e.preventDefault();
                        SetCustomerDineType('Dine-In');
                        _NextPage();
                    }}
                    Style = {{margin: 'auto 15px'}}
                />                
            </div>
        </div>
    )
}

export default CustomerDineType;
