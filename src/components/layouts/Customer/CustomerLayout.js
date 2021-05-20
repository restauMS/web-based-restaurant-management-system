import React from 'react';
import MainCustomer from '../../views/Customer/CustomerView';
import { CustomerProvider } from '../../contexts/CustomerContext';
import './style/CustomerLayout.scss';


export const CustomerOrder = () => {
    return (
        <CustomerProvider>
            <div className="CustomerLayoutContainer">
                <MainCustomer/>
            </div>
        </CustomerProvider>
    )
}

export const CustomerCheckout = () => {
    return (
        <div className="CustomerLayoutContainer">
            <h1>
                This is the Checkout component
            </h1>
        </div>
    )
}