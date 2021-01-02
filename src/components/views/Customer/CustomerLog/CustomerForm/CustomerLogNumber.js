import React from 'react';

import CustomerLabel from '../../../../common/Label/Label';
import CustomerTextfield from '../../../../common/Textfield/Textfield';

const CustomerLogNumber = props => {

    if(props.LogPage !== 3) {
        return null
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
                LabelContent='we appreciate you dining with us'
                isLabelContrast={false}
            />
            {/* * Customer Textfield: A custom Textfield Component where customer's can input text*/}
            <CustomerTextfield
                PlaceholderTitle='enter your contact number'
                HandleChange = {props.HandleChange}
                Name = {props.Name}
                Type = 'text'
            />
        </div>
    );
}

export default CustomerLogNumber;