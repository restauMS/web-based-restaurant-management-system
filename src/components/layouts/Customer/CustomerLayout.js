// Dependency Imports
import React from 'react';

// Component Imports
import MainCustomer from '../../views/Customer/CustomerView';

// Component Styling Import
import './style/CustomerLayout.scss';


export const CustomerOrder = () => {
    return (
        <div className="CustomerLayoutContainer">
            <MainCustomer/>
        </div>
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