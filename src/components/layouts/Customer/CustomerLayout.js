import React from 'react';
import './style/CustomerLayout.scss';
import CustomerView from '../../views/Customer/CustomerView';

export default function CustomerLayout(){
    return (
        <div className="CustomerLayoutContainer">
            <CustomerView/>
        </div>
    )
}