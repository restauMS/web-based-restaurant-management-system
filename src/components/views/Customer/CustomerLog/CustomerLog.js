import React, { useState } from 'react';

import CustomerLogName from './CustomerForm/CustomerLogName';
import CustomerLogAddress from './CustomerForm/CustomerLogAddress';
import CustomerLogNumber from './CustomerForm/CustomerLogNumber';
import CustomerLogTable from './CustomerForm/CustomerLogTable';
import CustomerPolicyAgreement from '../CustomerLog/CustomerPolicyAgreement/CustomerPolicyAgreement';
import SubmitButton from '../../../common/Button/Button';

const CustomerLog = props => {

    // Sets Default Log Page is 1 which is the name input
    const [CurrentLogPage, SetCurrentLogPage] = useState(1);
    
    const [LogName, SetLogName] = useState('');
    const [LogAddress, SetLogAddress] = useState('');
    const [LogContactNumber, SetLogContactNumber] = useState('');
    const [LogTableOfChoice, SetLogTableOfChoice] = useState([]);

    // Making sure we don't go out of bounds 
    const _nextLogPage = (e) => {
        e.preventDefault();
        SetCurrentLogPage(CurrentLogPage >= 4 ? 5 : CurrentLogPage + 1);
        console.log(CurrentLogPage);
    }
    // ! The _previousLogPage functionality is doable however may not be necessary **Subject to change
    // ? If we can't reset a session automatically we'll have to implement a previous page button
    // const _previousLogPage = () =>{
    //     SetCurrentLogPage = CurrentLogPage <= 1 ? 1 : CurrentLogPage - 1;
    // }
    // Finds the right target value of each LogForm input
    // const HandleChange = e => {
    //     const {name, value} = e.target;
    //     SetLogInput({[name]: value});
    // }

    const HandleSubmit = e => {
        e.preventDefault();
        props.LogData(
                    {
                        CustomerName: LogName, 
                        CustomerAddress: LogAddress, 
                        CustomerContact: LogContactNumber, 
                        CustomerTable: LogTableOfChoice
                    }
                );
        props.NextStage();
    }

    if(props.Stage !== 1) 
        return null;
    

    return (
        <form 
        style = {{
            'display': 'flex',
            'flexFlow': 'column'
        }}
        >
            {/* 
            * This is a multi-paged form approach
            */}
            <CustomerPolicyAgreement
                LogPage = {CurrentLogPage}
                ButtonFunction = {_nextLogPage}
            />
            <CustomerLogName
                // * Props for Checking if the Page mounted is correct
                LogPage = {CurrentLogPage}
                // * Props for the onChange handler in the Input found in LogName
                HandleChange = {e => {SetLogName(e.target.value)}}
                // * For the Input label props
                Name = 'CustomerName'
            />
            <CustomerLogAddress
                LogPage = {CurrentLogPage}
                HandleChange = {e => {SetLogAddress(e.target.value)}}
                Name = 'CustomerAddress'
            />
            <CustomerLogNumber
                LogPage = {CurrentLogPage}
                HandleChange = {e => {SetLogContactNumber(e.target.value)}}
                Name = 'CustomerContact' 
            />
            <CustomerLogTable
                LogPage = {CurrentLogPage}
                ProceedFunction = {HandleSubmit}
                SetChosenCard = {SetLogTableOfChoice}
            />
            
            {
            // * Filters the proceed button before the final page
            CurrentLogPage <= 4 && CurrentLogPage > 1 ? 
            <SubmitButton
            isButtonLink = {false}
            isButtonContrast = {true}
            ButtonContent = 'Submit.'
            ButtonFunction = {_nextLogPage}
            /> : null
            }

        </form>
    );
}

export default CustomerLog;