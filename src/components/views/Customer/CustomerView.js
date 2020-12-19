import React, {useState} from 'react';
import CustomerLabel from '../../common/Label/Label';
import CustomerTextfield from '../../common/Textfield/Textfield';
import CustomerButton from '../../common/Button/Button';


const CustomerView = props => {
        return (
        <div style={
            {
                display: 'flex', 
                flexFlow: 'column'
            }}
        >
            {/* * Customer Label: Just a heading 😁 */}
            <CustomerLabel 
                LabelContent='welcome.'
                isContrast={true}
            />
            {/* * Customer Textfield: A custom Textfield Component where customer's can input text 😎 */}
            <CustomerTextfield
                PlaceholderTitle='Enter Name'
            />
            {/* * Customer Button: A custom Button Component where the customer's can submit inputted text 😎 */}
            <CustomerButton
                isContrast = {true}
                ButtonText = 'Submit.'
            />
        </div>
        );
}

export default CustomerView;