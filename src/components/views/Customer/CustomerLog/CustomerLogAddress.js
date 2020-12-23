import React from 'react';

import CustomerLabel from '../../../common/Label/Label';
import CustomerTextfield from '../../../common/Textfield/Textfield';

const CustomerLogAddress = props => {

    // This is to make sure this component will not mount if not on the right Log Page
    if(props.LogPage !== 2) 
    {
        return null;
    }

    return (
        <div style=
        {
            {
                display: 'flex', 
                flexFlow: 'column'
            }
        }
        >
            {/* * Customer Label: Just a heading */}
            <CustomerLabel 
                LabelContent={`how's your day?`}
                isLabelContrast={false}
            />
            {/* * Customer Textfield: A custom Textfield Component where customer's can input text*/}
            <CustomerTextfield
                PlaceholderTitle='enter your address'
                HandleChange = {props.HandleChange}
                Name = {props.Name}
                Type = 'text'
            />
        </div>
    );
}

export default CustomerLogAddress;