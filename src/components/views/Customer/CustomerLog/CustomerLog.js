import React, {useState} from 'react';

import CustomerLogName from './CustomerLogName';
import CustomerLogAddress from './CustomerLogAddress';
import CustomerLogNumber from './CustomerLogNumber';
import CustomerLogTable from './CustomerLogTable';

import SubmitButton from '../../../common/Button/Button';

const CustomerLog = () => {

    // Object Log Form to be used as default state

    // Sets Default Log Page is 1 which is the name input
    const [CurrentLogPage, SetCurrentLogPage] = useState(1);
    
    const [LogName, SetLogName] = useState('');
    const [LogAddress, SetLogAddress] = useState('');
    const [LogContactNumber, SetLogContactNumber] = useState('');
    const [LogTableOfChoice, SetLogTableOfChoice] = useState(0);
    

    // Making sure we don't go out of bounds 
    const _nextLogPage = (e) => {
        e.preventDefault();
        SetCurrentLogPage(CurrentLogPage >= 3 ? 4 : CurrentLogPage + 1);
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
        console.log(`Data to Submit: ${LogName} ${LogAddress} ${LogContactNumber} ${LogTableOfChoice}`);
    }

    return (
        <form 
        onSubmit={HandleSubmit}
        style = {{
            'display': 'flex',
            'flexFlow': 'column'
        }}
        >
            {/* 
            * This is a multi-paged form approach
            */}
            {/* 
            // * Where the
            */}
            <CustomerLogName
                // * Props for Checking if the Page is mounted correctly
                LogPage = {CurrentLogPage}
                // * Props for the onChange handler
                HandleChange = {e => {SetLogName(e.target.value)}}
                // * For the Input name props
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
            // * Filter for the last proceed submit button
            CurrentLogPage <= 3 ? <SubmitButton
            isButtonContrast = {true}
            ButtonContent = 'Submit.'
            ButtonFunction = {_nextLogPage}
            /> : null
            }
        </form>
    );
}

export default CustomerLog;