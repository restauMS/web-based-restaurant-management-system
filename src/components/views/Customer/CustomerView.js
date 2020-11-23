import React from 'react';
import CustomerLabel from '../../common/Label/Label';
import CustomerTextfield from '../../common/Textfield/Textfield';
import CustomerButton from '../../common/Button/Button';

class LogPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // State stuff goes here
            isLogSeshCompleted: false
        }
    }
    LogCustomerName(){
        return (
            <div class="CustomerLogName">
                {/* TODO: Create a Logging Interface for Inputting Customer Name*/}
            </div>
        )
    }
    LogCustomerNumber(){
        return (
            <div class="CustomerLogNumber">
                {/* TODO: Create a Logging Interface for Inputting Customer Mobile Number*/}
            </div>
        )
    }
    LogCustomerAddress(){
        return (
            <div class="CustomerLogAddress">
                {/* TODO: Create a Logging Interface for Inputting Customer Address*/}
            </div>
        )
    }
}

export default class CustomerView extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            // State stuff goes here
        }
    }

    render(){
        return (
        <div style={
            {display: 'flex', 
            flexFlow: 'column'}}>
            <CustomerLabel 
                LabelContent='welcome.'
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