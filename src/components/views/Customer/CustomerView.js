import React from 'react';
import CustomerLabel from '../../common/Label/Label';
import CustomerTextfield from '../../common/Textfield/Textfield';
import CustomerButton from '../../common/Button/Button';
// * All these function components are probably class components not sure yet.
// function LogCustomerName(props){
//     return (
//         <div class="CustomerLogName">
//             {/* TODO: Create a Logging Interface for Inputting Customer Name*/}
//         </div>
//     )
// }
// function LogCustomerAddress(props){
//     return (
//         <div class="CustomerLogAddress">
//             {/* TODO: Create a Logging Interface for Inputting Customer Address*/}
//         </div>
//     )
// }
// function LogCustomerNumber(props){
//     return (
//         <div class="CustomerLogNumber">
//             {/* TODO: Create a Logging Interface for Inputting Customer Mobile Number*/}
//         </div>
//     )
// }

export default class CustomerView extends React.Component{
    render(){
        return (
        <div style={
            {display: 'flex', 
            flexFlow: 'column'}}>
            <CustomerLabel LabelContent='welcome.'
            isContrast={true}/>
            <CustomerTextfield
            PlaceholderTitle='Enter Name'
            />
            <CustomerButton
            isContrast = {true}
            ButtonText = 'Submit.'
            />
        </div>
        );
    }
}