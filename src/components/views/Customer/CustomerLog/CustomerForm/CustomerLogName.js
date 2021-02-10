import React from 'react';

// Component Imports
import CustomerLabel from '../../../../common/Label/Label';
import CustomerTextfield from '../../../../common/Textfield/Textfield';

const CustomerLogName = props => {

    // This is to make sure this component will not mount if not on the right Log Page
    if(props.LogPage !== 2){
        return null;
    }

    return (
        <div style=
        {
            
            {
                display: 'flex', 
                flexFlow: 'column',
                ...props.Style
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
                HandleChange = {props.HandleChange}
                Name = {props.Name}
                Type = 'text'
            />
        </div>
    )
}

export default CustomerLogName;