import React , { useContext } from 'react'
import { CustomerContext } from '../../../../contexts/CustomerContext';
import CustomerLabel from '../../../../common/Label/Label';
import CustomerButton from '../../../../common/Button/Button';

const CustomerDineType = () => {

    const { PageCount ,  _NextPage , SetDineType } = useContext(CustomerContext);

    return (
        <div style = {{
            display: 'flex',
            flexFlow: 'column'
        }}>
            <CustomerLabel
                LabelContent={`Hello, ${}!`}
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
                    HandleChange = {() => {
                        SetDineType('Takeout');
                    }}
                    Style = {{margin: 'auto 15px'}}
                />
                <CustomerButton
                    isButtonLink = {false}
                    isButtonContrast = {true}
                    ButtonContent = 'Dine-In'
                    HandleChange = {() => {
                        SetDineType('Dine-In');
                    }}
                    Style = {{margin: 'auto 15px'}}
                />                
            </div>
        </div>
    )
}

export default CustomerDineType;
