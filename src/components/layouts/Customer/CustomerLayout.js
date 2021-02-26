// Dependency Imports
import React from 'react';

// Component Imports
import MainCustomer from '../../views/Customer/CustomerView';

// Component Styling Import
import './style/CustomerLayout.scss';


const CustomerOrder = () => {
    return (
        <div className="CustomerLayoutContainer">
            <MainCustomer/>
        </div>
    )
}

const CustomerCheckout = () => {
    return (
        <div className="CustomerLayoutContainer">
            <h1>
                This is the Checkout component
            </h1>
        </div>
    )
}

const CustomerServiceRoutes = [
    {
        path: '/Customer/Order',
        component: CustomerOrder
    },
    {
        path: '/Customer/Checkout',
        component: CustomerCheckout
    }
]

export default CustomerServiceRoutes;