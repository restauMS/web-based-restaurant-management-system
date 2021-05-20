import React, { useContext } from 'react';

import CustomerDineType from './CustomerForm/CustomerDineType';
import CustomerCount from './CustomerForm/CustomerCount';
import CustomerLogName from './CustomerForm/CustomerLogName';
import CustomerLogAddress from './CustomerForm/CustomerLogAddress';
import CustomerLogNumber from './CustomerForm/CustomerLogNumber';
import CustomerLogTable from './CustomerForm/CustomerLogTable';
import CustomerPolicyAgreement from '../CustomerLog/CustomerPolicyAgreement/CustomerPolicyAgreement';
import SubmitButton from '../../../common/Button/Button';
import { CustomerContext } from '../../../contexts/CustomerContext';

const CustomerLog = () => {

    const { Stage ,  PageCount , _NextPage} = useContext(CustomerContext);
    
    if(Stage !== 1) 
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
            <CustomerPolicyAgreement/> 
            <CustomerLogName/>
            <CustomerDineType/>
            <CustomerCount/>
            <CustomerLogAddress/>
            <CustomerLogNumber/>
            <CustomerLogTable/>
            {
            // ! Damn
            PageCount === 2 || PageCount === 5 || PageCount === 6 ? 
            <SubmitButton
                isButtonLink = {false}
                isButtonContrast = {true}
                ButtonContent = 'Submit.'
                ButtonFunction = {(e) => {
                    e.preventDefault();
                    _NextPage()
                }}
            /> 
                : 
                null
            }

        </form>
    );
}

export default CustomerLog;