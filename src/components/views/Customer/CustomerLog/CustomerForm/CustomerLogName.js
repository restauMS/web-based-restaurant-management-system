import React , { useContext } from 'react';
import CustomerLabel from '../../../../common/Label/Label';
import CustomerTextfield from '../../../../common/Textfield/Textfield';
import { CustomerContext } from '../../../../contexts/CustomerContext';

const CustomerLogName = () => {

    const { PageCount , _NextPage , OrderSession, SetName } = useContext(CustomerContext);

    // This is to make sure this component will not mount if not on the right Log Page
    if(PageCount !== 2){
        return null;
    }

    return (
        <div style=
        {
            
            {
                display: 'flex', 
                flexFlow: 'column',
            }
        }
        >
            {/* * Customer Label: Just a heading */}
            <CustomerLabel 
                LabelContent='welcome.'
                isLabelContrast={false}
            />
            {/* * Customer Textfield: A custom Textfield Component where customer's can input text*/}
            <CustomerTextfield
                PlaceholderTitle='enter your name'
                HandleChange = { (e) => SetName(e.target.value) }
                Name = {OrderSession.CustomerName}
                Type = 'text'
            />
        </div>
    )
}

export default CustomerLogName;